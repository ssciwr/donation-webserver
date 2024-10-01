from flask import Blueprint, render_template, request, flash, redirect, url_for
from werkzeug.security import generate_password_hash
from sqlalchemy import func, cast, VARBINARY
from .models import RawData
from . import db

donate = Blueprint("donate", __name__)

@donate.route("/donation", methods=["GET", "POST"])
def donation():
    if request.method == "GET":
        return render_template("donate.html")
    elif request.method == "POST":
        text = request.form.get("text")
        # make sure this is not empty
        if not text:
            flash("Please provide text input", category="error")
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
            flash("Text input received", category="success")
            # results = db.session.query(RawData).filter_by(
            #     donation='text').all()
            # for result in results:
            #     print(f"ID: {result.donor_id}, Donation: {result.donation}")
            # redirect to homepage
            return redirect(url_for("views.home"))

    return render_template("donate.html")
