import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";

export default function Sidebar() {

    const { logout } = useAuth();

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "#28a745",
                borderBottom: "1px solid white"
            }}
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
                            href="/directorio"
                        >
                            <Typography
                                color={"white"}
                            >
                                Directorio
                            </Typography>
                        </Button>
                        <Button
                            onClick={logout}
                        >
                            <Typography
                                color={"white"}
                            >
                                Cerrar sesión
                            </Typography>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
};