

from flask import Flask
from config.bd import app
from flask_cors import CORS
@app.route("/")
def index():
    return "Welcome to the backend by Martin Cantillo "

#Enable CORS for the entire application
CORS(app)