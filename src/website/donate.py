from flask import Blueprint, render_template, request, flash

donate = Blueprint('donate', __name__)

@donate.route('/donation', methods=['GET', 'POST'])
def donation():
    if request.method == 'GET':
        return render_template("donate.html")
    elif request.method == 'POST':
        text = request.form.get('text')
        # make sure this is not empty
        if not text:
            flash("Please provide text input", category="error")
        else:
            flash("Text input received", category="success")
    return render_template("donate.html")