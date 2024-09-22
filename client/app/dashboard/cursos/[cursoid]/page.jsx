'use client';

import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { Container } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import axios from "axios";
import Link from 'next/link';
import { useEffect, useState } from "react";

export default function Page({
    params
}) {

    const { cursoid } = params;

    const [actividades, setActividades] = useState([]);

    useEffect(() => {
        const getActividades = async () => {
            const { success, result } = (await axios.get(`/api/actividades/getByCurso/${cursoid}`)).data

            if (success) setActividades(result)
        };

        getActividades();
    }, [cursoid]);

    const deleteActividad = async (id) => {
        const { success, result } = (await axios.delete(`/api/actividades/delete/${id}`)).data;

        if (success) window.location.reload();
    };


    return (
        <Container
            maxWidth="xl"
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
                        getActions: ({ id }) => {

                            return [
                                <GridActionsCellItem key={1}
                                    icon={<EditRoundedIcon />}
                                    label="Edit"
                                    className="textPrimary"
                                    href={`/dashboard/cursos/${cursoid}/actividades/${id}`}
                                    color="inherit"
                                />,
                                <GridActionsCellItem key={2}
                                    icon={<DeleteRoundedIcon />}
                                    label="Delete"
                                    onClick={() => deleteActividad(id)}
                                    color="inherit"
                                />,
                            ];
                        }
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
            <Link href={`/dashboard/cursos/${cursoid}/actividades`} className="button" style={{
                display: "block",
                float: "left"
            }}>Agregar actividad</Link>
        </Container>
    );
}
