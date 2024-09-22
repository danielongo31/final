'use client'

import axios from 'axios';
import React, { useState } from 'react';

export default function AgregarPuntos({
    params
}) {
    
    const [descripcion, setDescripcion] = useState("");
    const [fecha, setFecha] = useState("");
    const { cursoid } = params;


    const handleSubmit = async (e) => {
        e.preventDefault();
        const actividades = {
            descripcion,
            fecha,
            curso: cursoid
        }
        await axios.post('/api/actividades/add', actividades);
        window.location.reload()
    }

    return (
        <div className="container">
            <div className="box">
                <h1 className="heading">Agregar Actividad</h1>
                <div className="form-container">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="label">Descripción:</label>
                            <textarea className="form-control" type="text" onChange={(e) => setDescripcion(e.currentTarget.value)}></textarea>
                        </div>
                        <div className="form-group">
                            <label className="label">Fecha:</label>
                            <input className="form-control" type="datetime-local" onChange={(e) => setFecha(e.currentTarget.value)}></input>
                        </div>
                        <button type="submit" className="button">Agregar actividad</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
