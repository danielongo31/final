'use client'

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { Button, Container, Stack } from "@mui/material";
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import axios from "axios";
import Link from 'next/link';
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";  

export default function MiembroPage({ params }) {
  const { cursoid } = params;

  const [miembros, setMiembros] = useState([]);
  const [cursoNombre, setCursoNombre] = useState('');  
  const [ids, setIds] = useState([]);

 
  useEffect(() => {
    const getMiembros = async () => {
      
      const { success, result: curso } = (await axios.get(`/api/curso/getById/${cursoid}`)).data;
      if (success) {
        setCursoNombre(curso.nombre);  
      }

      
      let { success: miembrosSuccess, result } = (await axios.get(`/api/miembro/getByCurso/${cursoid}`)).data;
      if (miembrosSuccess) {
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
      setMiembros(prevMiembros => prevMiembros.filter(miembro => miembro.id !== id));
    }
  };

  const addPuntos = async (tipo) => {
    const puntosData = { ids, biblia: 0, ofrenda: 0, participacion: 0 };

    if (tipo === 'biblia') puntosData.biblia = 100;
    if (tipo === 'ofrenda') puntosData.ofrenda = 100;
    if (tipo === 'participacion') puntosData.participacion = 100;

    const { success } = (await axios.post('/api/puntos/masive', puntosData)).data;

    if (success) {
      const { success, result } = (await axios.get(`/api/miembro/getByCurso/${cursoid}`)).data;
      if (success) {
        const updatedMembers = await Promise.all(
          result.map(async (miembro) => {
            const { result: puntos } = (await axios.get(`/api/puntos/getById/${miembro.puntosId}`)).data;
            miembro.puntos = puntos;
            return miembro;
          })
        );
        setMiembros(updatedMembers);
      }
    }
  };

  const handleSetIds = (model) => {
    setIds(miembros.filter(miembro => model.includes(miembro.id)).map(miembro => miembro.puntos.id));
  };

  
  const exportToExcel = () => {
    if (miembros.length === 0) return;

    const formattedMiembros = miembros.map((miembro) => ({
      documento: miembro.documento,
      nombres: miembro.nombres,
      apellidos: miembro.apellidos,
      rol: miembro.rol,
      edad: miembro.edad,
      biblia: miembro.puntos ? miembro.puntos.biblia : 0,
      ofrenda: miembro.puntos ? miembro.puntos.ofrenda : 0,
      participacion: miembro.puntos ? miembro.puntos.participacion : 0,
      total: miembro.puntos ? miembro.puntos.biblia + miembro.puntos.ofrenda + miembro.puntos.participacion : 0,
    }));

    const worksheet = XLSX.utils.json_to_sheet(formattedMiembros);
    const keys = Object.keys(formattedMiembros[0] || {});

    worksheet["!cols"] = keys.map((key) => ({
      wch: Math.max(
        key.length,
        ...formattedMiembros.map((miembro) =>
          miembro[key] ? miembro[key].toString().length : 0
        )
      ),
    }));

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Miembros");

    
    XLSX.writeFile(workbook, `Lista_curso_${cursoNombre}.xlsx`);
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
            valueGetter: (value, row) => {
              return row.puntos ? row.puntos.biblia : 0;
            },
            align: "center"
          },
          {
            field: 'ofrenda',
            headerName: 'Puntos por Ofrenda',
            width: 150,
            valueGetter: (value, row) => {
              return row.puntos ? row.puntos.ofrenda : 0;
            },
            align: "center"
          },
          {
            field: 'participacion',
            headerName: 'Puntos por Participación',
            width: 170,
            valueGetter: (value, row) => {
              return row.puntos ? row.puntos.participacion : 0;
            },
            align: "center"
          },
          {
            field: 'total',
            headerName: 'Puntos Totales',
            width: 160,
            valueGetter: (value, row) => {
              return row.puntos ? row.puntos.biblia + row.puntos.ofrenda + row.puntos.participacion : 0;
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
        <Button onClick={exportToExcel} variant='contained' color="primary">Exportar a Excel</Button>
      </Stack>
    </Container>
  );
}
