import pytest
from backend import create_app
from backend.donate import init_views

@pytest.fixture()
def app():
    app = create_app()
    init_views(app)
    app.config.update(
        {
            "TESTING": True,
        }
    )
    yield app


@pytest.fixture()
def client(app):
    return app.test_client()


@pytest.fixture()
def runner(app):
    return app.test_cli_runner()
