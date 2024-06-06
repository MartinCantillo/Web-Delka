from flask import Flask, render_template
from config.bd import app
from flask_cors import CORS
from api.render import ruta_render, ruta_empresa,ruta_cliente,ruta_parametrizacion,ruta_productos,ruta_vendedor,ruta_venta_produco

app.register_blueprint(ruta_render, url_prefix="/")
app.register_blueprint(ruta_empresa, url_prefix="/api")
app.register_blueprint(ruta_cliente, url_prefix="/api")
app.register_blueprint(ruta_parametrizacion, url_prefix="/api")
app.register_blueprint(ruta_productos, url_prefix="/api")
app.register_blueprint(ruta_vendedor, url_prefix="/api")
app.register_blueprint(ruta_venta_produco, url_prefix="/api")



#Enable CORS for the entire application
CORS(app)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')