'use client'

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { Button, Container, Stack } from "@mui/material";
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import axios from "axios";
import Link from 'next/link';
import { useEffect, useState } from "react";

export default function MiembroPage({ params }) {
  const { cursoid } = params;

  const [miembros, setMiembros] = useState([]);
  const [ids, setIds] = useState([]);

  useEffect(() => {
    const getMiembros = async () => {
      let { success, result } = (await axios.get(`/api/miembro/getByCurso/${cursoid}`)).data;
      if (success) {
        result = await Promise.all(
          result.map(async (miembro) => {
            const { result: puntos } = (await axios.get(`/api/puntos/getById/${miembro.puntosId}`)).data;
            miembro.puntos = puntos;
            return miembro;
          })
        );
        setMiembros(result);
      }
    };

    getMiembros();
  }, [cursoid]);

  const deleteMiembro = async (id) => {
    const { success } = (await axios.delete(`/api/miembro/delete/${id}`)).data;
    if (success) {
      setMiembros(miembros.filter(miembro => miembro.id !== id));
    }
  };

  const addPuntos = async (tipo) => {
    const puntosData = { ids, biblia: 0, ofrenda: 0, participacion: 0 };

    
    if (tipo === 'biblia') puntosData.biblia = 100;
    if (tipo === 'ofrenda') puntosData.ofrenda = 100;
    if (tipo === 'participacion') puntosData.participacion = 100;

    const { success } = (await axios.post('/api/puntos/masive', puntosData)).data;

    if (success) {
      
      setMiembros(prev =>
        prev.map(miembro => {
          if (ids.includes(miembro.puntos.id)) {
            miembro.puntos.biblia += puntosData.biblia;
            miembro.puntos.ofrenda += puntosData.ofrenda;
            miembro.puntos.participacion += puntosData.participacion;
          }
          return miembro;
        })
      );
    }
  };

  const handleSetIds = (model) => {
    setIds(miembros.filter(miembro => model.includes(miembro.id)).map(miembro => miembro.puntos.id));
  };

  return (
    <Container maxWidth="xl" style={{ marginTop: '20px' }}>
      <DataGrid
        rows={miembros}
        columns={[
          { field: 'documento', headerName: 'Documento de identidad', width: 180 },
          { field: 'nombres', headerName: 'Nombres', width: 130 },
          { field: 'apellidos', headerName: 'Apellidos', width: 130 },
          { field: 'rol', headerName: 'Rol', width: 165 },
          { field: 'edad', headerName: 'Edad', width: 80 },
          {
            field: 'biblia',
            headerName: 'Puntos por Biblia',
            width: 150,
            valueGetter: (value, row, field) => {
              return row.puntos.biblia
            },
            align: "center"
          },
          {
            field: 'ofrenda',
            headerName: 'Puntos por Ofrenda',
            width: 150,
            valueGetter: (value, row, field) => {
              return row.puntos.ofrenda
            },
            align: "center"
          },
          {
            field: 'participacion',
            headerName: 'Puntos por Participación',
            width: 170,
            valueGetter: (value, row, field) => {
              return row.puntos.participacion
            },
            align: "center"
          },
          {
            field: 'total',
            headerName: 'Puntos Totales',
            width: 160,
            valueGetter: (value, row, field) => {
              return row.puntos.biblia + row.puntos.ofrenda + row.puntos.participacion
            },
            align: "center"
          },
          {
            field: 'Actions',
            headerName: 'Acciones',
            width: 100,
            type: 'actions',
            getActions: ({ id }) => [
              <GridActionsCellItem
                key="add"
                icon={<AddCircleRoundedIcon />}
                label="Add"
                href={`/dashboard/cursos/${cursoid}/miembros/${id}`}
                color="inherit"
                component={Link}
              />,
              <GridActionsCellItem
                key="delete"
                icon={<DeleteRoundedIcon />}
                label="Delete"
                onClick={() => deleteMiembro(id)}
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
        onRowSelectionModelChange={handleSetIds}
      />
      <Stack direction={"row"} spacing={3} padding={2}>
        <Link href={`/dashboard/agregar_miembros?curso=${cursoid}`} className="button">Agregar miembro</Link>
        <Button onClick={() => addPuntos('biblia')} variant='contained'>Agregar puntos Biblia</Button>
        <Button onClick={() => addPuntos('ofrenda')} variant='contained'>Agregar puntos Ofrenda</Button>
        <Button onClick={() => addPuntos('participacion')} variant='contained'>Agregar puntos Participación</Button>
      </Stack>
    </Container>
  );
}
