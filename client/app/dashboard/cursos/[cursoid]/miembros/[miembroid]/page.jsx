'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function AgregarPuntos({
    params
}) {

    const { miembroid } = params;

    const [puntosTotales, setPuntosTotales] = useState(0);
    const [miembro, setMiembro] = useState(null);


    useEffect(() => {
        const getMiembro = async () => {
            const { success, result } = (await axios.get(`/api/miembro/getById/${miembroid}`)).data;

            if (success) {
                const { result: puntos } = (await axios.get(`/api/puntos/getById/${result.puntosid}`)).data;

                setPuntosTotales(puntos.totales);
                setMiembro(result);
            }
        };

        getMiembro();
    },[miembroid])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const puntos = {
            totales: puntosTotales,
        }
        console.log(miembro)
        await axios.patch(`/api/puntos/update/${miembro.puntosid}`, puntos);
        window.location.reload()
    }

    return (
        <div className="container">
            <div className="box">
                <h1 className="heading">Modificar Puntos</h1>
                <div className="form-container">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="label">Puntos a modificar:</label>
                            <input className="form-control" type="number" onChange={(e) => setPuntosTotales(parseInt(e.currentTarget.value))} value={puntosTotales}></input>
                        </div>
                        <button type="submit" className="button">Modificar Puntos</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
