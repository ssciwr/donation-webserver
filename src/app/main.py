from flask import send_from_directory
from website import create_app

app = create_app()


# Path for our main Svelte page
@app.route("/")
def client():
    return send_from_directory('client/public', 'index.html')

if __name__ == "__main__":
    app.run(debug=True)
