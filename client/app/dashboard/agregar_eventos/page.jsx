'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function AgregarEventos({

}) {
    
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaFin, setFechaFin] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        const eventos = {
            nombre,
            descripcion,
            fechaInicio,
            fechaFin,
        }
        await axios.post('/api/eventos/add', eventos);
        window.location.reload()
    }

    return (
        <div className="container">
            <div className="box">
                <h1 className="heading">Crear evento</h1>
                <div className="form-container">
                    <form className="form" onSubmit={handleSubmit}>
                     <div className="form-group">
                            <label className="label">Nombre:</label>
                            <input className="form-control" type="text" onChange={(e) => setNombre(e.currentTarget.value)}></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Descripcion:</label>
                            <textarea className="form-control" type="text" onChange={(e) => setDescripcion(e.currentTarget.value)}></textarea>
                        </div>
                        <div className="form-group">
                            <label className="label">Fecha de inicio:</label>
                            <input className="form-control" type="datetime-local" onChange={(e) => setFechaInicio(e.currentTarget.value)}></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Fecha de fin:</label>
                            <input className="form-control" type="datetime-local" onChange={(e) => setFechaFin(e.currentTarget.value)}></input>
                        </div>
                        <button type="submit" className="button">Crear evento</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
