from starlette.testclient import TestClient
from main import app
from test.setup_data import setup_data
import pytest

client = TestClient(app)


@pytest.fixture
def setup():
    return setup_data()


def test_efficient_fronter_api_returns_200(setup):
    response = client.post("/efficientFrontier", json=setup)
    assert response.status_code == 200


def test_efficient_fronter_api_returns_400_no_data():
    response = client.post("efficientFrontier")
    assert response.status_code == 422
