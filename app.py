from flask import Flask, render_template
from config.bd import app
from flask_cors import CORS
from api.render import ruta_render

app.register_blueprint(ruta_render, url_prefix="/")




#Enable CORS for the entire application
CORS(app)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')