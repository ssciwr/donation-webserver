from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import Integer, String, DateTime, ForeignKey, LargeBinary, type_coerce, Unicode, BLOB
from sqlalchemy_utils import StringEncryptedType
from sqlalchemy_utils.types.encrypted.encrypted_type import AesGcmEngine, AesEngine
from sqlalchemy.dialects.mysql import VARBINARY, CHAR
from sqlalchemy.types import TypeDecorator
from sqlalchemy.sql import func, cast
import datetime
import cryptography
from typing import List
from . import db

secret_key = "1234"

class EncType(TypeDecorator):
    impl = LargeBinary

    def bind_expression(self, bindvalue):
        return func.aes_encrypt(
            type_coerce(bindvalue, CHAR()), func.unhex(func.sha2(secret_key, 512)),
        )

    def column_expression(self, col):
        return cast(
            func.aes_decrypt(col, func.unhex(func.sha2(secret_key, 512)),),
            CHAR(charset="utf8"),
        )



# the raw data model
class RawData(db.Model):
    # the submission id
    donor_id: Mapped[int] = mapped_column(primary_key=True)
    # should this be the donated data as zip?
    # use all the emails as string and encrypt
    # but somewhere we need to store the blob of the zip file
    # here we could encrypt the whole column as it is never touched again
    # if emails contain large attachements, could this overflow the database?
    # donation: Mapped[str] = mapped_column(StringEncryptedType(
                                    #    VARBINARY(5000),
                                    #    secret_key,
                                    #    AesGcmEngine,
                                    #    AesEngine,
                                    #    'pkcs5',
                                    #    length=5000), nullable=True)
    donation: Mapped[str] = mapped_column(EncType, nullable=True)
    # the hash checksum of the donation zip file, for example SHA-256
    checksum: Mapped[str] = mapped_column(String(128), nullable=True)
    # Now the metadata
    # the date of the donation
    date: Mapped[datetime.datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), nullable=False
    )
    # the email of the donor
    # email goes into different model for newsletter
    # email: Mapped[str] = mapped_column(String(500), nullable=True)
    # donor consent form
    consent: Mapped[bool] = mapped_column(Integer, nullable=True)
    # the age group of the donor in categories
    age: Mapped[int] = mapped_column(Integer, nullable=True)
    # the region of the donor in categories
    region: Mapped[int] = mapped_column(String(500), nullable=True)
    # the gender of the donor in categories
    gender: Mapped[int] = mapped_column(Integer, nullable=True)
    # if the emails are in the mother tongue of the donor
    mother_tongue: Mapped[int] = mapped_column(Integer, nullable=True)
    # the type of emails: formal, informal, etc. as categories
    email_type: Mapped[int] = mapped_column(Integer, nullable=True)
    # set up the relationship with the processed data
    children: Mapped[List["ProcessedData"]] = relationship()


class ProcessedData(db.Model):
    # the submission id
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    # the raw email text
    raw_email: Mapped[str] = mapped_column(String(5000), nullable=False)
    # the processed pseudonymized email text
    processed_email: Mapped[str] = mapped_column(String(5000), nullable=False)
    # the date of the processing
    date: Mapped[datetime.datetime] = mapped_column(
        DateTime(timezone=True), default=func.now(), nullable=False
    )
    # date the email was sent
    date_sent: Mapped[datetime.datetime] = mapped_column(
        DateTime(timezone=True), default=func.now(), nullable=False
    )
    # if attachments were included
    attachments: Mapped[bool] = mapped_column(Integer, nullable=False)
    # type of the attachements
    attachment_type: Mapped[str] = mapped_column(String(50), nullable=False)
    # the language of the email
    language: Mapped[str] = mapped_column(String(50), nullable=False)
    # the original donation id, one to many relationship
    donation_id: Mapped[int] = mapped_column(ForeignKey("raw_data.donor_id"))

class InformantList(db.Model):
    # the submission id
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    # the informant email
    # should this be encrypted?
    informant_email: Mapped[str] = mapped_column(String(500), nullable=False)
