from flask import Flask, render_template
from config.bd import app
from flask_cors import CORS
@app.route("/", methods=['GET'])
def index():
    return render_template('index.html')

#Enable CORS for the entire application
CORS(app)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')