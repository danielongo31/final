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
        fechaInicio: "",
        fechaFin: "",
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
                            <label className="label">Fecha de inicio:</label>
                            <input className="form-control" type="datetime-local" onChange={(e) => setEvento({...evento, fechaInicio: e.currentTarget.value})} value={evento.fechaInicio}></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Fecha de fin:</label>
                            <input className="form-control" type="datetime-local" onChange={(e) => setEvento({...evento, fechaFin: e.currentTarget.value})} value={evento.fechaFin}></input>
                        </div>
                        <button type="submit" className="button">Actualizar evento</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
