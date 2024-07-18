def test_donate(client):
    response = client.get("/donation")
    assert response.status_code == 200
    assert b"Please provide text input" not in response.data
    response = client.post("/donation", data={"text": "some text"})
    # test the redirect after submission
    assert response.status_code == 302
    response = client.post("/donation", data={"text": ""})
    # assert the error response
    assert response.status_code == 200
    assert b"Please provide text input" in response.data
