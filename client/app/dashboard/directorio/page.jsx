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
  const [miembros, setMiembros] = useState([]);

  useEffect(() => {
    const getMiembros = async () => {
      try {
        const response = await axios.get('/api/miembro/getAll');
        const { success, result } = response.data;

        if (success) {

          const miembrosFiltrados = result.map(({ permiso, puntosId, ...rest }) => rest);
          setMiembros(miembrosFiltrados);
        } else {
          console.error("Error fetching miembros:", response.data);
        }
      } catch (error) {
        console.error("Error fetching miembros:", error);
      }
    };

    getMiembros();
  }, []);

  const deleteMiembro = async (id) => {
    try {
      const response = await axios.delete(`/api/miembro/delete/${id}`);
      const { success } = response.data;

      if (success) {
        setMiembros((prev) => prev.filter((miembro) => miembro.id !== id));
      }
    } catch (error) {
      console.error("Error deleting miembro:", error);
    }
  };


  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(miembros);


    const keys = Object.keys(miembros[0] || {});
    ws["!cols"] = keys.map((key) => ({
      wch: Math.max(
        key.length,
        ...miembros.map((miembro) => (miembro[key] ? miembro[key].toString().length : 0))
      ),
    }));


    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Miembros");

    XLSX.writeFile(wb, "miembros.xlsx");
  };


  return (
    <Container maxWidth="xl" style={{ marginTop: '20px' }}>
      <DataGrid
        rows={miembros}
        columns={[
          { field: 'id', headerName: 'ID' },
          { field: 'documento', headerName: 'Documento de identidad', width: 200 },
          { field: 'nombres', headerName: 'Nombres', width: 200 },
          { field: 'apellidos', headerName: 'Apellidos', width: 200 },
          { field: 'telefono', headerName: 'Teléfono', width: 200 },
          { field: 'direccion', headerName: 'Dirección', width: 200 },
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
                className="textPrimary"
                href={`/dashboard/directorio/${id}`}
                color="inherit"
              />,
              <GridActionsCellItem
                key={2}
                icon={<DeleteRoundedIcon />}
                label="Delete"
                onClick={() => deleteMiembro(id)}
                color="inherit"
              />,
            ],
          },
        ]}
        initialState={{
          pagination: { paginationModel: { page: 0, pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      <Stack direction={"row"} spacing={3} padding={2}>
        <Link href={`/dashboard/agregar_miembros`} className="button" style={{
          display: "block",
          float: "left"
        }}>
          Agregar miembro
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
