from flask import Flask

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'wrgeerngh npitgn rion'

    from .views import views
    from .donate import donate
    from .about import about

    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(donate, url_prefix='/')
    app.register_blueprint(about, url_prefix='/')

    return app