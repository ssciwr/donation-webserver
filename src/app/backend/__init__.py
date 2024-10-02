from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase
import os

DB_NAME = "email_donations"
PASSWD = os.getenv("MYSQL_PASSWORD")

class Base(DeclarativeBase):
    pass


db = SQLAlchemy(model_class=Base)


def create_app():
    app = Flask(__name__)
    app.config.from_prefixed_env()
    # reads the key from FLASK_SECRET_KEY env var
    # app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql://donor:{PASSWD}@localhost/{DB_NAME}'
    app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql://donor:{PASSWD}@127.0.0.1/{DB_NAME}'
    db.init_app(app)
    
    with app.app_context():
        db.create_all()


    @app.route("/")
    def home():
        return "Hello, world!"


    return app
