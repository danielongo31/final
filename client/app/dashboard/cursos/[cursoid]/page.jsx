'use client';

import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { Button, Container, Stack } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import * as XLSX from 'xlsx'; 
import axios from "axios";
import Link from 'next/link';
import { useEffect, useState } from "react";

export default function Page({ params }) {
    const { cursoid } = params;
    const [actividades, setActividades] = useState([]);

    useEffect(() => {
        const getActividades = async () => {
            const { success, result } = (await axios.get(`/api/actividades/getByCurso/${cursoid}`)).data;

            if (success) setActividades(result);
        };

        getActividades();
    }, [cursoid]);

    const deleteActividad = async (id) => {
        const { success } = (await axios.delete(`/api/actividades/delete/${id}`)).data;

        if (success) window.location.reload();
    };

    
    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleDateString();
    };

    
    const exportToExcel = () => {
        if (actividades.length === 0) return; 

       
        const formattedActividades = actividades.map((actividad) => ({
            ...actividad,
            fecha: formatDate(actividad.fecha),
        }));

        const worksheet = XLSX.utils.json_to_sheet(formattedActividades); 
        const keys = Object.keys(formattedActividades[0] || {}); 

        
        worksheet["!cols"] = keys.map((key) => ({
            wch: Math.max(
                key.length, 
                ...formattedActividades.map((actividad) =>
                    actividad[key] ? actividad[key].toString().length : 0
                ) 
            ),
        }));

        const workbook = XLSX.utils.book_new(); 
        XLSX.utils.book_append_sheet(workbook, worksheet, "Actividades"); 

        XLSX.writeFile(workbook, `actividades_curso_${cursoid}.xlsx`);
    };

    return (
        <Container
            maxWidth="xl"
            style={{ marginTop: '20px' }}
        >
            <DataGrid
                rows={actividades}
                columns={[
                    {
                        field: 'id',
                        headerName: 'ID'
                    },
                    {
                        field: 'descripcion',
                        headerName: 'Descripción',
                        width: 1000,
                    },
                    {
                        field: 'fecha',
                        headerName: 'Fecha',
                        width: 100,
                        valueGetter: (value, row, column) => {
                            return new Date(row.fecha).toLocaleDateString()
                        }
                    },
                    {
                        field: 'Actions',
                        headerName: 'Acciones',
                        width: 100,
                        type: 'actions',
                        getActions: ({ id }) => [
                            <GridActionsCellItem
                                key={1}
                                icon={<EditRoundedIcon />}
                                label="Edit"
                                href={`/dashboard/cursos/${cursoid}/actividades/${id}`}
                                color="inherit"
                            />,
                            <GridActionsCellItem
                                key={2}
                                icon={<DeleteRoundedIcon />}
                                label="Delete"
                                onClick={() => deleteActividad(id)}
                                color="inherit"
                            />,
                        ]
                    }
                ]}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
            <Stack direction={"row"} spacing={3} padding={2}>
                <Link
                    href={`/dashboard/cursos/${cursoid}/actividades`}
                    className="button"
                    style={{
                        display: "block",
                        float: "left"
                    }}
                >
                    Agregar actividad
                </Link>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={exportToExcel}
                >
                    Generar informe
                </Button>
            </Stack>
        </Container>
    );
}
