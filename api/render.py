from flask import Flask, Blueprint, request, jsonify,render_template

ruta_render = Blueprint("route_user", __name__)

@ruta_render.route("/", methods=['GET'])
def index():
    return render_template('index.html')
