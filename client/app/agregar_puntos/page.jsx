
import React from 'react';
import '../resources/css/Global.css'; 

export default function AgregarPuntos() {
    return (
        <div className="container">
            <div className="box">
                <h1 className="heading">Agregar Puntos</h1>
                <div className="form-container">
                    <form className="form">
                        <div className="form-group">
                            <label className="label">Documento de Identidad:</label>
                            <input className="form-control" type="text" id="documento" name="documento"></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Puntos por Biblia:</label>
                            <input className="form-control" type="number" id="puntosbiblia" name="puntosbiblia"></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Puntos por Ofrenda:</label>
                            <input className="form-control" type="number" id="puntosofrenda" name="puntosofrenda"></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Puntos por Participación:</label>
                            <input className="form-control" type="number" id="puntosparticipacion" name="puntosparticipacion"></input>
                        </div>
                        <button type="submit" className="button">Agregar Puntos</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
