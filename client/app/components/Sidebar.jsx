import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export default function Sidebar() {
    return (
        <AppBar
            position="static"
            color="success"
        >
            <Container
                maxWidth="x1"
            >
                <Toolbar
                    disableGutters
                >
                    <Box>
                        <Button
                            LinkComponent={Link}
                            href="/"
                        >
                            <Typography
                                color={"white"}
                            >
                                Inicio
                            </Typography>
                        </Button>

                        <Button
                            LinkComponent={Link}
                            href="/agregar_miembros"
                        >
                            <Typography
                                color={"white"}
                            >
                                Agregar miembros
                            </Typography>
                        </Button>

                        <Button
                            LinkComponent={Link}
                            href="/agregar_puntos"
                        >
                            <Typography
                                color={"white"}
                            >
                                Agregar puntos
                            </Typography>
                        </Button>

                        <Button
                            LinkComponent={Link}
                            href="/cursos"
                        >
                            <Typography
                                color={"white"}
                            >
                                Cursos
                            </Typography>
                        </Button>

                        <Button
                            LinkComponent={Link}
                            href="/directorio"
                        >
                            <Typography
                                color={"white"}
                            >
                                Directorio
                            </Typography>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
};