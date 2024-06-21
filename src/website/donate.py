from flask import Blueprint, render_template, request

donate = Blueprint('donate', __name__)

@donate.route('/donation', methods=['GET', 'POST'])
def donation():
    data = request.form
    print(data)
    return render_template("donate.html")