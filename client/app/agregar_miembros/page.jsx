'use client'

import React, { useEffect, useState } from 'react';
import '../resources/css/Global.css';
import axios from 'axios';


export default function AgregarMiembros({
    searchParams
}) {

    const [roles, setRoles] = useState([]);

    useEffect(() => {
        const getRoles = async () => {
            const { success, result } = (await axios.get('/api/rol/getAll')).data;

            if (success) setRoles(result);
        };

        getRoles();
    }, []);

    const { curso: cursoid } = searchParams;

    const [documento, setDocumento] = useState("");
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [edad, setEdad] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [curso, setCurso] = useState(cursoid);
    const [rol, setRol] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const miembro = {
            documento,
            nombres,
            apellidos,
            edad,
            telefono,
            direccion,
            curso,
            rol
        }
        axios.post('/api/miembro/add', miembro);
        window.location.reload()
    }

    return (
        <div className="container">
            <div className="box">
                <h1 className="heading">Agregar Miembros</h1>
                <div className="form-container">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="label">Documento de Identidad:</label>
                            <input className="form-control" type="text" id="documento" name="documento" onChange={(e) => setDocumento(e.currentTarget.value)}></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Nombres:</label>
                            <input className="form-control" type="text" id="nombres" name="nombres" onChange={(e) => setNombres(e.currentTarget.value)}></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Apellidos:</label>
                            <input className="form-control" type="text" id="apellidos" name="apellidos" onChange={(e) => setApellidos(e.currentTarget.value)}></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Edad:</label>
                            <input className="form-control" type="text" id="apellidos" name="apellidos" onChange={(e) => setEdad(e.currentTarget.value)}></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Teléfono:</label>
                            <input className="form-control" type="text" id="telefono" name="telefono" onChange={(e) => setTelefono(e.currentTarget.value)}></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Direccion:</label>
                            <input className="form-control" type="text" id="direccion" name="direccion" onChange={(e) => setDireccion(e.currentTarget.value)} />
                        <div className="form-group">
                            <label className="label">Rol:</label>
                            <select className="select" onChange={(e) => setRol(e.currentTarget.value)}>
                                <option>Selecciona una opción</option>
                                {
                                    roles.map((rol, key) => <option value={rol.id} key={key}>
                                        {rol.nombre}
                                    </option>)
                                }
                            </select>
                        </div>
                        </div>
                        {rol == 1 ? <div className="form-group">
                            <label className="label">Curso:</label>
                            <select className="select" onChange={(e) => setCurso(e.currentTarget.value)}>
                                <option>Selecciona una opción</option>
                                <option value={1}>Salacuna</option>
                                <option value={2}>Párvulos</option>
                                <option value={3}>Principiantes</option>
                                <option value={4}>Primarios</option>
                                <option value={5}>Color carácter</option>
                                <option value={6}>Prejuveniles</option>
                            </select>
                        </div> : null}
                        {/* <div className="form-group">
                            <label className="label">Permiso:</label>
                            <input className="form-control" type="file" id="permiso" name="permiso" />
                        </div> */}
                        <button type="submit" className="button">Agregar Miembro</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
