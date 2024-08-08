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

            if (success) setCursos(result)
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
            >
                {
                    cursos.map(curso => (
                        <Card
                            variant="outlined"
                        >
                            <CardActionArea
                                component={Link}
                                href={`/cursos/${curso.id}`}
                            >
                                <CardMedia
                                    component="img"
                                    height="125"
                                    image="https://vilmanunez.com/wp-content/uploads/2016/03/herramientas-y-recursos-para-crear-curso-online.png"
                                    alt="green iguana"
                                />

                                <CardContent>
                                    <Typography>{curso.nombre}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))
                }
            </Stack>
        </Container>
    )
}