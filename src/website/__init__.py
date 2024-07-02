from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session, declarative_base

db = SQLAlchemy()
DB_NAME = "email-donations.db"
engine = create_engine("sqlite:///{DB_NAME}", echo=True))
db_session = scoped_session(sessionmaker(autocommit=False,
                                         autoflush=False,
                                         bind=engine))

Base = declarative_base()
Base.query = db_session.query_property()

def create_app():
    app = Flask(__name__)
    app.config["SECRET_KEY"] = "wrgeerngh npitgn rion"
    db.init_app(app)

    from .views import views
    from .donate import donate
    from .about import about

    app.register_blueprint(views, url_prefix="/")
    app.register_blueprint(donate, url_prefix="/")
    app.register_blueprint(about, url_prefix="/")


    def init_db():
        from .models import RawData
        Base.metadata.create_all(bind=engine)

    init_db()
    return app
