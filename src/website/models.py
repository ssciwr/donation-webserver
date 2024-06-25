from . import db

# import hashlib
from sqlalchemy.sql import func


# the raw data model
class RawData(db.Model):
    # the submission id
    id = db.Column(db.Integer, primary_key=True)
    # should this be the donated data as zip?
    donation = db.Column(db.Blob, nullable=False)
    # the hash checksum of the donation zip file, for example SHA-256
    # could also be SHA-3
    # Compute SHA-256 hash
    # sha256_hash = hashlib.sha256(data).hexdigest()
    checksum = db.Column(db.String(100), nullable=False)
    # Now the metadata
    # the date of the donation
    date = db.Column(db.DateTime(timezone=True), default=func.now(), nullable=False)
    # the email of the donor
    email = db.Column(db.String(100), nullable=True)
    # the age group of the donor in categories
    age = db.Column(db.Integer, nullable=True)
    # the region of the donor in categories
    region = db.Column(db.String(100), nullable=True)
    # the gender of the donor in categories
    gender = db.Column(db.Integer, nullable=True)
    # if the emails are in the mother tongue of the donor
    mother_tongue = db.Column(db.Integer, nullable=True)
    # the type of emails: formal, informal, etc. as categories
    email_type = db.Column(db.Integer, nullable=True)
    # set up the relationship with the processed data
    emails = db.relationship("ProcessedData")


class ProcessedData(db.Model):
    # the submission id
    id = db.Column(db.Integer, primary_key=True)
    # the raw email text
    raw_email = db.Column(db.String(100000), nullable=False)
    # the processed pseudonymized email text
    processed_email = db.Column(db.String(100000), nullable=False)
    # the date of the processing
    date = db.Column(db.DateTime(timezone=True), default=func.now(), nullable=False)
    # the language of the email
    language = db.Column(db.String(10), nullable=False)
    # the original donation id, one to many relationship
    donation_id = db.Column(db.Integer, db.ForeignKey("rawdata.id"), nullable=False)
