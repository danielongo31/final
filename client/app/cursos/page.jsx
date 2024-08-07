import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Cursos() {
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
                <Card
                    variant="outlined"
                >
                    <CardActionArea
                        component={Link}
                        href="/cursos/1"
                    >
                        <CardMedia
                            component="img"
                            height="125"
                            image="https://vilmanunez.com/wp-content/uploads/2016/03/herramientas-y-recursos-para-crear-curso-online.png"
                            alt="green iguana"
                        />

                        <CardContent>
                            <Typography>Curso 1</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card
                    variant="outlined"
                >
                    <CardActionArea
                        component={Link}
                        href="/cursos/2"
                    >
                        <CardMedia
                            component="img"
                            height="125"
                            image="https://vilmanunez.com/wp-content/uploads/2016/03/herramientas-y-recursos-para-crear-curso-online.png"
                            alt="green iguana"
                        />

                        <CardContent>
                            <Typography>Curso 2</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Stack>
        </Container>
    )
}