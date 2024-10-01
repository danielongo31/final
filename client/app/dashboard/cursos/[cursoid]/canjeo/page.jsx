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
    const theme = useTheme();
    const [nombres, setNombres] = useState([]);
    const [miembros, setMiembros] = useState([]);
    const [puntosTotales, setPuntosTotales] = useState(0);
    const [cantidad, setCantidad] = useState("");
    const { cursoid } = params;

    useEffect(() => {
        const getMiembros = async () => {
            const { success, result } = (await axios.get(`/api/miembro/curso/${cursoid}`)).data;
            if (success) {
                const updatedResult = await Promise.all(
                    result.map(async (miembro) => {
                        const { result: puntos } = (await axios.get(`/api/puntos/getById/${miembro.puntosid}`)).data;
                        miembro.puntos = puntos;
                        return miembro;
                    })
                );
                setMiembros(updatedResult);
                const totalPuntos = updatedResult.reduce((acc, miembro) => acc + (miembro.puntos.biblia + miembro.puntos.ofrenda + miembro.puntos.participacion), 0);
                setPuntosTotales(totalPuntos);
            }
        };

        getMiembros();
    }, [cursoid]);

    const handleChange = (event) => {
        const { target: { value } } = event;
        setNombres(typeof value === 'string' ? value.split(',') : value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const canjeoData = {
            miembros: nombres.map(nombre => {
                const miembroSeleccionado = miembros.find(miembro => miembro.nombres === nombre);
                return { id: miembroSeleccionado.id, puntos: -parseInt(cantidad, 10) }; // Restar puntos
            }),
            curso: cursoid,
        };

        try {
            await Promise.all(canjeoData.miembros.map(async miembro => {
                await axios.patch(`/api/miembro/update/${miembro.id}`, {
                    puntos: miembro.puntos,
                });
            }));

            window.location.reload();
        } catch (error) {
            console.error("Error al canjear puntos:", error);
        }
    };

    function getStyles(name, nombres, theme) {
        return {
            fontWeight: nombres.includes(name)
                ? theme.typography.fontWeightMedium
                : theme.typography.fontWeightRegular,
        };
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
                                    multiple
                                    displayEmpty
                                    value={nombres}
                                    onChange={handleChange}
                                    input={<OutlinedInput />}
                                    renderValue={(selected) => {
                                        if (selected.length === 0) {
                                            return <em>Selecciona miembro</em>;
                                        }
                                        return selected.join(', ');
                                    }}
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
                                    {miembros.map((miembro) => (
                                        <MenuItem
                                            key={miembro.id} 
                                            value={miembro.nombres} 
                                            style={getStyles(miembro.nombres, nombres, theme)}
                                        >
                                            {miembro.nombre} 
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <label className="label">Puntos totales:</label>
                            <span className="form-control">{puntosTotales}</span>
                        </div>
                        <div className="form-group">
                            <label className="label">Cantidad a canjear:</label>
                            <input className="form-control" type="number" value={cantidad} onChange={(e) => setCantidad(e.target.value)}/>
                        </div>
                        <button type="submit" className="button">Actualizar puntos</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
