'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function AgregarEventos({

}) {
    
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [horaInicio, setHoraInicio] = useState("");
    const [horaSalida, setHoraSalida] = useState("");
    const [fecha, setFecha] = useState("");



    const handleSubmit = async (e) => {
        e.preventDefault();
        const eventos = {
            nombre,
            descripcion,
            horaInicio,
            horaSalida,
            fecha,
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
                            <label className="label">Hora de inicio:</label>
                            <input className="form-control" type="time" onChange={(e) => setHoraInicio(e.currentTarget.value)}></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Hora de salida:</label>
                            <input className="form-control" type="time" onChange={(e) => setHoraSalida(e.currentTarget.value)}></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Fecha:</label>
                            <input className="form-control" type="date" onChange={(e) => setFecha(e.currentTarget.value)}></input>
                        </div>
                        <button type="submit" className="button">Crear evento</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
