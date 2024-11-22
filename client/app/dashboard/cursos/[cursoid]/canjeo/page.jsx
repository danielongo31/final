'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default function CanjeoPuntos({ params }) {

    const [miembros, setMiembros] = useState([]);
    const [puntosBiblia, setPuntosBiblia] = useState(0);
    const [puntosOfrenda, setPuntosOfrenda] = useState(0);
    const [puntosParticipacion, setPuntosParticipacion] = useState(0);
    const [cantidad, setCantidad] = useState(0);
    const { cursoid } = params;
    const [puntosId, setPuntosId] = useState(0);
    const [tipoPuntos, setTipoPuntos] = useState("");


    useEffect(() => {
        const getMiembros = async () => {
            const { success, result } = (await axios.get(`/api/miembro/getByCurso/${cursoid}`)).data;
            if (success) {
                setMiembros(result);
            }
        };

        getMiembros();
    }, [cursoid]);

    const handleSelect = async (event) => {
        const miembroid = event.target.value;
        const { success, result: { id, biblia, ofrenda, participacion } } = (await axios.get(`/api/puntos/getByMiembro/${miembroid}`)).data;
        if (success) {
            setPuntosId(id);
            setPuntosBiblia(biblia);
            setPuntosOfrenda(ofrenda);
            setPuntosParticipacion(participacion);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        let biblia = puntosBiblia;
        let ofrenda = puntosOfrenda;
        let participacion = puntosParticipacion;

        switch (tipoPuntos) {
            case 'biblia':
                biblia = biblia - cantidad;
                if (biblia < 0) {
                    biblia = 0;
                }
                break;
            case 'ofrenda':
                ofrenda = ofrenda - cantidad;
                if (ofrenda < 0) {
                    ofrenda = 0;
                }
                break;
            case 'participacion':
                participacion = participacion - cantidad;
                if (participacion < 0) {
                    participacion = 0;
                }
                break;
        }

        const puntos = {
            biblia,
            ofrenda,
            participacion,
        }
        await axios.patch(`/api/puntos/update/${puntosId}`, puntos);
        console.log(puntosBiblia);
        // window.location.reload()
    }


    return (
        <div className="container">
            <div className="box">
                <h1 className="heading">Canjear puntos</h1>
                <div className="form-container">
                    <form className="form" onSubmit={handleSubmit}>
                        <div>
                            <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                                <Select
                                    displayEmpty
                                    input={<OutlinedInput />}
                                    MenuProps={MenuProps}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    sx={{
                                        backgroundColor: 'white',
                                        '& .MuiSelect-select': {
                                            backgroundColor: 'white',
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'transparent',
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'transparent',
                                        },
                                    }}
                                    onChange={handleSelect}
                                >
                                    {miembros.map((miembro) => (
                                        <MenuItem
                                            key={miembro.id}
                                            value={miembro.id}
                                        >
                                            {miembro.nombres} {miembro.apellidos}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <label className="label">Puntos totales:</label>
                            <span className="form-control">{puntosBiblia + puntosOfrenda + puntosParticipacion}</span>
                        </div>
                        <div>
                            <Select
                                onChange={(e) => setTipoPuntos(e.target.value)}
                                displayEmpty
                                input={<OutlinedInput />}
                                MenuProps={MenuProps}
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={{
                                    backgroundColor: 'white',
                                    '& .MuiSelect-select': {
                                        backgroundColor: 'white',
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'transparent',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'transparent',
                                    },
                                }}
                            >
                                <MenuItem value={'biblia'}>Puntos por Biblia</MenuItem>
                                <MenuItem value={'ofrenda'}>Puntos por Ofrenda</MenuItem>
                                <MenuItem value={'participacion'}>Puntos por participación</MenuItem>
                            </Select>
                        </div>
                        <div>
                            <label className="label">Puntos disponibles para {tipoPuntos}:</label>
                            <span className="form-control">
                                {tipoPuntos === 'biblia' ? puntosBiblia : tipoPuntos === 'ofrenda' ? puntosOfrenda : tipoPuntos === 'participacion' ? puntosParticipacion : 0}
                            </span>
                        </div>

                        <div className="form-group">
                            <label className="label">Cantidad a canjear:</label>
                            <input className="form-control" type="number" defaultValue={cantidad} onChange={(e) => setCantidad(parseInt(e.target.value))} />
                        </div>
                        <button type="submit" className="button">Actualizar puntos</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
