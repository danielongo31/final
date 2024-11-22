'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function AgregarPuntos({
    params
}) {

    const { miembroid } = params;

    const [puntosBiblia, setPuntosBiblia] = useState(0);
    const [puntosOfrenda, setPuntosOfrenda] = useState(0);
    const [puntosParticipacion, setPuntosParticipacion] = useState(0);
    const [miembro, setMiembro] = useState(null);
    const [puntos, setPuntos] = useState([]);

    useEffect(() => {
        const getMiembro = async () => {
            const { success, result } = (await axios.get(`/api/miembro/getById/${miembroid}`)).data;

            if (success) {
                const { result: puntos } = (await axios.get(`/api/puntos/getById/${result.puntosid}`)).data;

                setPuntosBiblia(puntos.biblia);
                setPuntosOfrenda(puntos.ofrenda);
                setPuntosParticipacion(puntos.participacion);
                setMiembro(result);
            }
        };

        getMiembro();
    },[miembroid])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const puntos = {
            biblia: puntosBiblia,
            ofrenda: puntosOfrenda,
            participacion: puntosParticipacion,
        }
        console.log(miembro)
        await axios.patch(`/api/puntos/update/${miembro.puntosid}`, puntos);
        window.location.reload()
    }

    return (
        <div className="container">
            <div className="box">
                <h1 className="heading">Actualizar puntos</h1>
                <div className="form-container">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="label">Puntos por biblia:</label>
                            <input className="form-control" type="number" onChange={(e) => setPuntosBiblia(parseInt(e.currentTarget.value))} value={puntosBiblia}></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Puntos por ofrenda:</label>
                            <input className="form-control" type="number" onChange={(e) => setPuntosOfrenda(parseInt(e.currentTarget.value))} value={puntosOfrenda}></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Puntos por participación:</label>
                            <input className="form-control" type="number" onChange={(e) => setPuntosParticipacion(parseInt(e.currentTarget.value))} value={puntosParticipacion}></input>
                        </div>
                        <button type="submit" className="button">Actualizar puntos</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
