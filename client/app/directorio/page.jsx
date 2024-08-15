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

  const [miembros, setMiembros] = useState([]);

  useEffect(() => {
    const getMiembros = async () => {
      const { success, result } = (await axios.get('/api/miembro/getAll')).data;

      if (success) setMiembros(result);

    };

    getMiembros();
  }, []);

  const deleteMiembro = async (id) => {
    const { success, result } = (await axios.delete(`/api/miembro/delete/${id}`)).data;

    if (success) window.location.reload();
  };

  return (
    <Container
      maxWidth="xl"
    >
      <DataGrid
        rows={miembros}
        columns={[
          {
            field: 'id',
            headerName: 'ID'
          },
          {
            field: 'documento',
            headerName: 'Documento de identidad',
            width: 200
          },
          {
            field: 'nombres',
            headerName: 'Nombres',
            width: 200
          },
          {
            field: 'apellidos',
            headerName: 'Apellidos',
            width: 200
          },
          {
            field: 'telefono',
            headerName: 'Telefono',
            width: 200
          },
          {
            field: 'direccion',
            headerName: 'Direccion',
            width: 200
          },
          {
            field: 'Actions',
            headerName: 'Acciones',
            width: 100,
            type: 'actions',
            getActions: ({ id }) => {

              return [
                <GridActionsCellItem
                  icon={<EditRoundedIcon />}
                  label="Edit"
                  className="textPrimary"
                  href={`/directorio/${id}`}
                  color="inherit"
                />,
                <GridActionsCellItem
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
      <Link href={`/agregar_miembros`} className="button" style={{
        display: "block",
        float: "left"
      }}>Agregar miembro</Link>
    </Container>
  );
}
