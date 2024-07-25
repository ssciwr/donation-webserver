from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase
from os import path

DB_NAME = "email_donations"


class Base(DeclarativeBase):
    pass


db = SQLAlchemy(model_class=Base)


def create_app():
    app = Flask(__name__)
    app.config.from_prefixed_env()
    # reads the key from FLASK_SECRET_KEY env var
    app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql://user:password@localhost/{DB_NAME}'
    db.init_app(app)

    from .views import views
    from .donate import donate
    from .about import about

    app.register_blueprint(views, url_prefix="/")
    app.register_blueprint(donate, url_prefix="/")
    app.register_blueprint(about, url_prefix="/")

    from .models import RawData  # noqa

    with app.app_context():
        db.create_all()

    return app

