from flask import Blueprint, render_template

about = Blueprint("about", __name__)


@about.route("/aboutus")
def aboutus():
    return render_template("about.html")
