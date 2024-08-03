'use client';

import { Container } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const { success, result } = (await axios.get('/api/user/getAll')).data;
      
      if (success) setUsers(result);
      
    };

    getUsers();
  }, []);

  return (
    <Container
      maxWidth="xl"
    >
      <DataGrid
        rows={users}
        columns={[
          {
            field: 'id',
            headerName: 'ID'
          },
          {
            field: 'dni',
            headerName: 'DNI',
            width: 100
          },
          {
            field: 'firstname',
            headerName: 'Nombre',
            width: 150
          },
          {
            field: 'lastname',
            headerName: 'Apellido',
            width: 150
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
    </Container>
  );
}
