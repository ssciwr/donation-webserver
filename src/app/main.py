from backend.donate import init_views
from backend import create_app

if __name__ == "__main__":
    app = create_app()
    init_views(app)
    app.run(debug=True)
