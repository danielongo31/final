'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ActualizarActividad({
    params
}) {

    const { actividadid } = params;
    

    const [actividad, setActividad] = useState({
        descripcion: "",
        fecha: "",

    });


    useEffect(() => {
        const getActividad = async () => {
            const { success, result } = (await axios.get(`/api/actividades/getById/${actividadid}`)).data;

            if (success) {
                setActividad(result);
            }
        };

        getActividad();
    }, [actividadid])


    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.patch(`/api/actividades/update/${actividadid}`, actividad);
        window.location.reload()
    }

    return (
        <div className="container">
            <div className="box">
                <h1 className="heading">Actualizar actividad</h1>
                <div className="form-container">
                    <form className="form" onSubmit={handleSubmit}>
                        <div>
                            <label className="label">Descripción:</label>
                            <textarea className="form-control" type="text" onChange={(e) => setActividad({...actividad, descripcion: e.currentTarget.value})} value={actividad.descripcion}></textarea>
                        </div>
                        <div className="form-group">
                            <label className="label">Fecha:</label>
                            <input className="form-control" type="datetime-local" onChange={(e) => setActividad({...actividad, fecha: e.currentTarget.value})} value={actividad.fecha}></input>
                        </div>
                        <button type="submit" className="button">Actualizar actividad</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
