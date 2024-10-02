from flask import request, flash, redirect, url_for
from werkzeug.security import generate_password_hash
from sqlalchemy import func, cast, VARBINARY
from .models import RawData
from . import db

def init_views(app):
    @app.route("/donation", methods=["POST"])
    def donation():
        text = request.form.get("text")
        # make sure this is not empty
        if not text:
            return "Error: No text provided"
            # we should also use logging
        else:
            # at the moment we are generating the hash checksum for the raw text
            new_submission = RawData(
                donation=text
                # checksum=generate_password_hash(text, method="pbkdf2:sha256"),
            )
            # add to db
            db.session.add(new_submission)
            # make commit to db
            db.session.commit()
            # results = db.session.query(RawData).filter_by(
            #     donation='text').all()
            # for result in results:
            #     print(f"ID: {result.donor_id}, Donation: {result.donation}")
            return "Success: data transferred to database"