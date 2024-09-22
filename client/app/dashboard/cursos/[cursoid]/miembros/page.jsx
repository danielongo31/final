'use client'

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { Container } from "@mui/material";
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import axios from "axios";
import Link from 'next/link';
import { useEffect, useState, } from "react";

export default function MiembroPage({
  params
}) {

  const { cursoid } = params;

  const [miembros, setMiembros] = useState([]);

  useEffect(() => {
    const getMiembros = async () => {
      let { success, result } = (await axios.get(`/api/miembro/getByCurso/${cursoid}`)).data
      if (success) {
        result = await Promise.all(
          result.map(async (miembro) => {
            const { result: puntos } = (await axios.get(`/api/puntos/getById/${miembro.puntosid}`)).data;
            miembro.puntos = puntos;
            return miembro;
          })
        )
        console.log(result)
        setMiembros(result)
      }
    };

    getMiembros();
  }, [cursoid]);

  return (
    <Container
      maxWidth="xl"
    >
      <DataGrid
        rows={miembros}
        columns={[
          {
            field: 'documento',
            headerName: 'Documento de identidad',
            width: 180
          },
          {
            field: 'nombres',
            headerName: 'Nombres',
            width: 130
          },
          {
            field: 'apellidos',
            headerName: 'Apellidos',
            width: 130
          },
          {
            field: 'rol',
            headerName: 'Rol',
            width: 165
          },
          {
            field: 'edad',
            headerName: 'Edad',
            width: 80
          },
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
            width: 200,
            valueGetter: (value, row, field) => {
              return row.puntos.ofrenda
            },
            align: "center"
          },
          {
            field: 'participacion',
            headerName: 'Puntos por Participación',
            width: 200,
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
            getActions: ({ id }) => {

              return [
                <GridActionsCellItem key={1}
                  icon={<AddCircleRoundedIcon />}
                  label="Add"
                  href={`/cursos/${cursoid}/miembros/${id}`}
                  color="inherit"
                  component={Link}
                />,
                <GridActionsCellItem key={2}
                  icon={<DeleteRoundedIcon />}
                  label="Delete"
                  onClick={() => deleteMiembro(id)}
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
      <Link href={`/dashboard/agregar_miembros?curso=${cursoid}`} className="button" style={{
        display: "block",
        float: "left"
      }}>Agregar miembro</Link>
    </Container>
  );
}
