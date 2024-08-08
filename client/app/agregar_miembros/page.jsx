'use client'

import React, { useEffect, useState } from 'react';
import '../resources/css/Global.css'; 
import axios from 'axios';


export default function AgregarMiembros() {

    const [documento, setDocumento] = useState("");
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [edad, setEdad] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [curso, setCurso] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const miembro = {
            documento,
            nombres,
            apellidos,
            edad,
            telefono,
            direccion,
            curso
        } 
        axios.post('/api/miembro/add',miembro);
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
                            <select className="select" onChange={(e) => setEdad(e.currentTarget.value)}>
                                <option>Selecciona una opción</option>
                                <option value={'0-2'}>0-2</option>
                                <option value={'3-5'}>3-5</option>
                                <option value={'6-8'}>6-8</option>
                                <option value={'9-11'}>9-11</option>
                                <option value={'12-14'}>12-14</option>
                                <option value={'15-18'}>15-18</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="label">Teléfono:</label>
                            <input className="form-control" type="text" id="telefono" name="telefono" onChange={(e) => setTelefono(e.currentTarget.value)}></input>
                        </div>
                        <div className="form-group">
                            <label className="label">Direccion:</label>
                            <input className="form-control" type="text" id="direccion" name="direccion" onChange={(e) => setDireccion(e.currentTarget.value)}/>
                        </div>
                        <div className="form-group">
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
                        </div>
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
