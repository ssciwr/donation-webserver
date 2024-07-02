from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import Integer, String, DateTime, ForeignKey

# import hashlib
from sqlalchemy.sql import func
import datetime
from . import db


# the raw data model
class RawData(db.Model):
    # __tablename__ = "raw_data"
    # the submission id
    donor_id: Mapped[int] = mapped_column(primary_key=True)
    # should this be the donated data as zip?
    donation: Mapped[str] = mapped_column(String, nullable=True)
    # the hash checksum of the donation zip file, for example SHA-256
    # could also be SHA-3
    # Compute SHA-256 hash
    # sha256_hash = hashlib.sha256(data).hexdigest()
    checksum: Mapped[str] = mapped_column(String, nullable=True)
    # Now the metadata
    # the date of the donation
    date: Mapped[datetime.datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), nullable=False
    )
    # the email of the donor
    email: Mapped[str] = mapped_column(String, nullable=True)
    # the age group of the donor in categories
    age: Mapped[int] = mapped_column(Integer, nullable=True)
    # the region of the donor in categories
    region: Mapped[int] = mapped_column(String, nullable=True)
    # the gender of the donor in categories
    gender: Mapped[int] = mapped_column(Integer, nullable=True)
    # if the emails are in the mother tongue of the donor
    mother_tongue: Mapped[int] = mapped_column(Integer, nullable=True)
    # the type of emails: formal, informal, etc. as categories
    email_type: Mapped[int] = mapped_column(Integer, nullable=True)
    # set up the relationship with the processed data
    # emails: Mapped[int] = relationship("ProcessedData", backref="RawData", lazy=True)
    # emails: Mapped[List["ProcessedData"]] = relationship()


# class ProcessedData(Base):
#     __tablename__ = "processeddata"
#     # the submission id
#     id: Mapped[int] = mapped_column(Integer, primary_key=True)
#     # the raw email text
#     raw_email: Mapped[str] = mapped_column(String, nullable=False)
#     # the processed pseudonymized email text
#     processed_email: Mapped[str] = mapped_column(String, nullable=False)
#     # the date of the processing
#     date: Mapped[datetime.datetime] = mapped_column(
#         DateTime(timezone=True), default=func.now(), nullable=False
#     )
#     # the language of the email
#     language: Mapped[str] = mapped_column(String, nullable=False)
#     # the original donation id, one to many relationship
#     donation_id: Mapped[int] = mapped_column(
#         ForeignKey("rawdata.donor_id"), nullable=True
#     )
