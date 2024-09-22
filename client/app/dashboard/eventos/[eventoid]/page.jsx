'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ActualizarEvento({
    params
}) {

    const { eventoid } = params;

    const [evento, setEvento] = useState({
        nombre: "",
        descripcion: "",
        horaInicio: "",
        horaSalida: "",
        fecha: "",



    });

    useEffect(() => {
        const getEvento = async () => {
            const { success, result } = (await axios.get(`/api/eventos/getById/${eventoid}`)).data;
            console.log(result)

            if (success) {
                setEvento(result);
            }
        };

        getEvento();
    }, [eventoid])


    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.patch(`/api/eventos/update/${eventoid}`, evento)
        
        window.location.reload()
    }

    return (
        <div className="container">
            <div className="box">
                <h1 className="heading">Actualizar evento</h1>
                <div className="form-container">
                    <form className="form" onSubmit={handleSubmit}>
                     <div className="form-group">
                            <label className="label">Nombre:</label>
                            <input className="form-control" type="text" onChange={(e) => setEvento({...evento, nombre: e.currentTarget.value})} value={evento.nombre}></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Descripcion:</label>
                            <textarea className="form-control" type="text" onChange={(e) => setEvento({...evento, descripcion: e.currentTarget.value})} value={evento.descripcion}></textarea>
                        </div>
                        <div className="form-group">
                            <label className="label">Hora de inicio:</label>
                            <input className="form-control" type="time" onChange={(e) => setEvento({...evento, horaInicio: e.currentTarget.value})} value={evento.horaInicio}></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Hora de salida:</label>
                            <input className="form-control" type="time" onChange={(e) => setEvento({...evento, horaSalida: e.currentTarget.value})} value={evento.horaSalida}></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Fecha:</label>
                            <input className="form-control" type="date" onChange={(e) => setEvento({...evento, fecha: e.currentTarget.value})} value={evento.fecha}></input>
                        </div> 
                        <button type="submit" className="button">Actualizar miembro</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
