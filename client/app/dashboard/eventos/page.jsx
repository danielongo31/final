'use client';

import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { Container } from "@mui/material";
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import axios from "axios";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const getEventos = async () => {
      const { success, result } = (await axios.get('/api/eventos/getAll')).data;

      if (success) setEventos(result);

    };

    getEventos();
  }, []);

  const deleteEvento = async (id) => {
    const { success, result } = (await axios.delete(`/api/eventos/delete/${id}`)).data;

    if (success) window.location.reload();
  };

  return (
    <Container
      maxWidth="xl"
    >
      <DataGrid
        rows={eventos}
        columns={[
          {
            field: 'id',
            headerName: 'ID'
          },
          {
            field: 'nombre',
            headerName: 'Nombre',
            width: 200
          },
          {
            field: 'descripcion',
            headerName: 'Descripción',
            width: 200
          },
          {
            field: 'fechaInicio',
            headerName: 'Fecha de Inicio',
            width: 100,
            valueGetter: (value, row, column) => {
                return new Date(row.fechaInicio).toLocaleDateString()
            }
          },
          {
            field: 'fechaFin',
            headerName: 'Fecha de finalización',
            width: 200,
            valueGetter: (value, row, column) => {
                return new Date(row.fechaFin).toLocaleDateString()
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
                  href={`/dashboard/eventos/${id}`}
                  color="inherit"
                />,
                <GridActionsCellItem key={2}
                  icon={<DeleteRoundedIcon />}
                  label="Delete"
                  onClick={() => deleteEvento(id)}
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
      <Link href={`/dashboard/agregar_eventos/`} className="button" style={{
        display: "block",
        float: "left"
      }}>Agregar evento</Link>
    </Container>
  );
}
