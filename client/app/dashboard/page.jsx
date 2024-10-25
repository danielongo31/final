'use client';

import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CursosPage() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
      const getCursos = async () => {
          const { success, result } = (await axios.get('/api/curso/getAll')).data;

          if (success) setCursos(result);
      };

      getCursos();
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{
          padding: '30px'
      }}
    >
      <Stack
          direction={'row'}
          gap={2}
          flexWrap="wrap" 
      >
          {
              cursos.map((curso, key) => (
                  <Card key={key}
                      variant="outlined"
                  >
                      <CardActionArea
                          component={Link}
                          href={`/cursos/${curso.id}`}
                      >
                          <CardMedia
                              component="img"
                              height="125"
                              image={curso.imagen} 
                              alt={curso.nombre} 
                          />

                          <CardContent>
                              <Typography>{curso.nombre}</Typography>
                              <Typography variant="body2" color="textSecondary">{curso.descripcion}</Typography>
                          </CardContent>
                      </CardActionArea>
                  </Card>
              ))
          }
      </Stack>
    </Container>
  );
}
