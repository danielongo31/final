'use client'

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { Button, Container, Stack, TextField } from "@mui/material";
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import axios from "axios";
import Link from 'next/link';
import { useEffect, useState } from "react";
import * as XLSX from 'xlsx'; 

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
    if (success) window.location.reload();
  };

  const addPuntos = async () => {
    const { success } = (await axios.post('/api/puntos/masive', {
      ids,
      totales: 100
    })).data;
    
    if (success) window.location.reload();
  };

  const handleSetIds = (model) => {
    setIds(miembros.filter(miembro => model.includes(miembro.id)).map(miembro => miembro.puntos.id));
  };

  
  const generateReport = () => {
    const ws = XLSX.utils.json_to_sheet(miembros.map(miembro => ({
      Documento: miembro.documento,
      Nombres: miembro.nombres,
      Apellidos: miembro.apellidos,
      Rol: miembro.rol,
      Edad: miembro.edad,
      Puntos: miembro.puntos.totales,
    })));

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Miembros");

    
    XLSX.writeFile(wb, `Informe_Miembros_${cursoid}.xlsx`);
  };

  return (
    <Container maxWidth="xl">
      {/* <Stack direction="row" spacing={2} padding={2}>
        <TextField
          label="Fecha de inicio"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Fecha de fin"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
      </Stack> */}

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
            width: 180
          },
          {
            field: 'apellidos',
            headerName: 'Apellidos',
            width: 180
          },
          {
            field: 'rol',
            headerName: 'Rol',
            width: 180
          },
          {
            field: 'edad',
            headerName: 'Edad',
            width: 180
          },
          {
            field: 'total',
            headerName: 'Puntos',
            width: 180,
            valueGetter: (value, row) => row.puntos.totales,
            align: "center"
          },
          {
            field: 'Actions',
            headerName: 'Acciones',
            width: 100,
            type: 'actions',
            getActions: ({ id }) => [
              <GridActionsCellItem key={1}
                icon={<AddCircleRoundedIcon />}
                label="Add"
                href={`/dashboard/cursos/${cursoid}/miembros/${id}`}
                color="inherit"
                component={Link}
              />,
              <GridActionsCellItem key={2}
                icon={<DeleteRoundedIcon />}
                label="Delete"
                onClick={() => deleteMiembro(id)}
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
        onRowSelectionModelChange={handleSetIds}
      />

      <Stack direction={"row"} spacing={3} padding={2}>
        <Link href={`/dashboard/agregar_miembros?curso=${cursoid}`} className="button">Agregar miembro</Link>
        <Button className="button" onClick={addPuntos} variant='contained'>Agregar puntos Biblia</Button>
        <Button className="button" onClick={addPuntos} variant='contained'>Agregar puntos Ofrenda</Button>
        <Button className="button" onClick={addPuntos} variant='contained'>Agregar puntos Participación</Button>
        <Button className="button" onClick={generateReport} variant='contained'>Generar Informe</Button> 
      </Stack>
    </Container>
  );
}
