'use client';

import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { Container, Stack, Button } from "@mui/material";
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import axios from "axios";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import * as XLSX from 'xlsx'; 

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
    const { success } = (await axios.delete(`/api/eventos/delete/${id}`)).data;

    if (success) window.location.reload();
  };


  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };


  const exportToExcel = () => {
    if (eventos.length === 0) return;


    const formattedEventos = eventos.map((evento) => ({
      ...evento,
      fechaInicio: formatDateTime(evento.fechaInicio),
      fechaFin: formatDateTime(evento.fechaFin),
    }));

    const ws = XLSX.utils.json_to_sheet(formattedEventos);
    const keys = Object.keys(formattedEventos[0] || {});


    ws["!cols"] = keys.map((key) => ({
      wch: Math.max(
        key.length,
        ...formattedEventos.map((evento) => (evento[key] ? evento[key].toString().length : 0))
      ),
    }));


    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Eventos");


    XLSX.writeFile(wb, "eventos.xlsx");
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: '30px'
      }}
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
            width: 150,
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
            getActions: ({ id }) => [
              <GridActionsCellItem
                key={1}
                icon={<EditRoundedIcon />}
                label="Edit"
                href={`/dashboard/eventos/${id}`}
                color="inherit"
              />,
              <GridActionsCellItem
                key={2}
                icon={<DeleteRoundedIcon />}
                label="Delete"
                onClick={() => deleteEvento(id)}
                color="inherit"
              />,
            ],
          },
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
          href={`/dashboard/agregar_eventos/`}
          className="button"
          style={{
            display: "block",
            float: "left"
          }}
        >
          Agregar evento
        </Link>
        <Button
          variant="contained"
          color="primary"
          onClick={exportToExcel}
          style={{
            float: "right"
          }}
        >
          Generar informe
        </Button>
      </Stack>
    </Container>
  );
}
