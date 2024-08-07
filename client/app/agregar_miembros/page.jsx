import React from 'react';
import '../resources/css/Global.css'; 


export default function AgregarMiembros() {
    return (
        <div className="container">
            <div className="box">
                <h1 className="heading">Agregar Miembros</h1>
                <div className="form-container">
                    <form className="form">
                        <div className="form-group">
                            <label className="label">Documento de Identidad:</label>
                            <input className="form-control" type="text" id="documento" name="documento"></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Nombres:</label>
                            <input className="form-control" type="text" id="nombres" name="nombres"></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Apellidos:</label>
                            <input className="form-control" type="text" id="apellidos" name="apellidos"></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Edad:</label>
                            <select className="select">
                                <option>Selecciona una opción</option>
                                <option value={'0-2'}>0-2</option>
                                <option value={'3-5'}>3-5</option>
                                <option value={'6-8'}>6-8</option>
                                <option value={'9-11'}>9-11</option>
                                <option value={'12-14'}>12-14</option>
                                <option value={'15-18'}>15-18</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="label">Teléfono:</label>
                            <input className="form-control" type="text" id="telefono" name="telefono"></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Permiso:</label>
                            <input className="form-control" type="file" id="permiso" name="permiso" />
                        </div>
                        <button type="submit" className="button">Agregar Miembro</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
