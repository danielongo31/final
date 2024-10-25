'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ActualizarEvento({ params }) {
    const { eventoid } = params;

    const [evento, setEvento] = useState({
        nombre: "",
        descripcion: "",
        fechaInicio: "",
        fechaFin: "",
        fecha: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const getEvento = async () => {
            const { success, result } = (await axios.get(`/api/eventos/getById/${eventoid}`)).data;

            if (success) {
                setEvento(result);
            }
        };

        getEvento();
    }, [eventoid]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación simple
        if (!evento.nombre || !evento.descripcion) {
            setError("Los campos nombre y descripción son obligatorios.");
            return;
        }

        try {
            await axios.patch(`/api/eventos/update/${eventoid}`, evento);
            setSuccess(true);
            setError("");
            window.location.reload();
        } catch (error) {
            console.error("Error actualizando el evento:", error);
        }
    };

    return (
        <div className="container">
            <div className="box">
                <h1 className="heading">Actualizar evento</h1>
                {error && <div className="error">{error}</div>}
                {success && <div className="success">Evento actualizado con éxito!</div>}
                <div className="form-container">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="label">Nombre:</label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={(e) => setEvento({ ...evento, nombre: e.currentTarget.value })}
                                value={evento.nombre}
                            />
                        </div>
                        <div className="form-group">
                            <label className="label">Descripción:</label>
                            <textarea
                                className="form-control"
                                onChange={(e) => setEvento({ ...evento, descripcion: e.currentTarget.value })}
                                value={evento.descripcion}
                            />
                        </div>
                        <div className="form-group">
                            <label className="label">Fecha de inicio:</label>
                            <input
                                className="form-control"
                                type="datetime-local"
                                onChange={(e) => setEvento({ ...evento, fechaInicio: e.currentTarget.value })}
                                value={evento.fechaInicio}
                            />
                        </div>
                        <div className="form-group">
                            <label className="label">Fecha de fin:</label>
                            <input
                                className="form-control"
                                type="datetime-local"
                                onChange={(e) => setEvento({ ...evento, fechaFin: e.currentTarget.value })}
                                value={evento.fechaFin}
                            />
                        </div>
                        <button type="submit" className="button">Actualizar evento</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
