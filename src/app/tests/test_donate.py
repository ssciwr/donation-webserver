def test_home(client):
    response = client.get("/")
    print(response)


def test_donate(client):
    response = client.post("/donation", data={"text": "some text"})
    assert response.status_code == 200
    assert b"Success: data transferred to database" in response.data
    response = client.post("/donation", data={"text": ""})
    # assert the error response for an empty text
    assert response.status_code == 200
    assert b"Error: No text provided" in response.data
