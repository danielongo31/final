'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ActualizarMiembro({
    params
}) {

    const { miembroid } = params;

    const [miembro, setMiembro] = useState({
        documento: "",
        nombres: "",
        apellidos: "",
        edad: "",
        telefono: "",
        direccion: "",


    });

    useEffect(() => {
        const getMiembro = async () => {
            const { success, result } = (await axios.get(`/api/miembro/getById/${miembroid}`)).data;
            console.log(result)

            if (success) {
                setMiembro(result);
            }
        };

        getMiembro();
    }, [miembroid])


    const handleSubmit = async (e) => {
        e.preventDefault();

        delete miembro.id; 
        delete miembro.puntosid;
        await axios.patch(`/api/miembro/update/${miembroid}`, miembro)
        
        window.location.reload()
    }

    return (
        <div className="container">
            <div className="box">
                <h1 className="heading">Actualizar miembro</h1>
                <div className="form-container">
                    <form className="form" onSubmit={handleSubmit}>
                     <div className="form-group">
                            <label className="label">Numero de documento:</label>
                            <input className="form-control" type="text" onChange={(e) => setMiembro({...miembro, documento: e.currentTarget.value})} value={miembro.documento}></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Nombres:</label>
                            <input className="form-control" type="text" onChange={(e) => setMiembro({...miembro, nombres: e.currentTarget.value})} value={miembro.nombres}></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Apellidos:</label>
                            <input className="form-control" type="text" onChange={(e) => setMiembro({...miembro, apellidos: e.currentTarget.value})} value={miembro.apellidos}></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Direccion:</label>
                            <input className="form-control" type="text" onChange={(e) => setMiembro({...miembro, direccion: e.currentTarget.value})} value={miembro.direccion}></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Telefono:</label>
                            <input className="form-control" type="text" onChange={(e) => setMiembro({...miembro, telefono: e.currentTarget.value})} value={miembro.telefono}></input>
                        </div> 
                        <button type="submit" className="button">Actualizar miembro</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
