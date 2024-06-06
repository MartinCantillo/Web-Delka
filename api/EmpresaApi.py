from flask import Flask, Blueprint, request, jsonify,render_template
from models.Empresa import Empresa,AdministradorSchema
from config.bd import app, bd, ma

ruta_empresa = Blueprint("ruta_empresa", __name__)

empresa_schema = AdministradorSchema()
empresas_schema = AdministradorSchema()

@ruta_empresa.route("/guardarEmpresa",  methods=['POST'])
def saveEmpresa():
    nombre_empresa=request.json['nombre_empresa']
    descripcion_empresa=request.json['descripcion_empresa']
    periodo_activo=request.json['periodo_activo']
    nueva_empresa=Empresa(nombre_empresa,descripcion_empresa,periodo_activo)
    bd.session.add(nueva_empresa)
    bd.session.commit()
    return empresa_schema.jsonify(nueva_empresa)

@ruta_empresa.route("/eliminarEmpresa", methods=['DELETE'])
def eliminarEmpresa():
     id = request.json['id']
     empresa=Empresa.query.get(id)
     if empresa is None:
          return jsonify({"mensaje": "No se encontró la empresa"})
     bd.session.delete(empresa)
     bd.session.commit()
     return jsonify({"message": "Empresa eliminada"}), 200
          




