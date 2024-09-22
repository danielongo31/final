import { AppBar, Box, Button, Container, Toolbar, Typography, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";
import { useState, useEffect } from "react";
import axios from 'axios'; 

export default function Sidebar() {
    const { logout } = useAuth();
    const [anchorEl, setAnchorEl] = useState(null);
    const [cursos, setCursos] = useState([]);
    const open = Boolean(anchorEl);

    useEffect(() => {
        const getCursos = async () => {
            const { success, result } = (await axios.get('/api/curso/getAll')).data;

            if (success) setCursos(result);
        };

        getCursos();
    }, []);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                            href="/dashboard"
                        >
                            <Typography color={"white"}>Inicio</Typography>
                        </Button>

                        <Button
                            LinkComponent={Link}
                            href="/dashboard/agregar_miembros"
                        >
                            <Typography color={"white"}>Agregar miembros</Typography>
                        </Button>

                        <Button
                            LinkComponent={Link}
                            href="/dashboard/directorio"
                        >
                            <Typography color={"white"}>Directorio</Typography>
                        </Button>

                        <Button
                            aria-controls={open ? 'cursos-menu' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <Typography color={"white"}>Cursos</Typography>
                        </Button>

                        <Menu
                            id="cursos-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            sx={{
                                '& .MuiPaper-root': {
                                    backgroundColor: '#28a745', 
                                    color: 'white', 
                                },
                                '& .MuiMenuItem-root': {
                                    '&:hover': {
                                        backgroundColor: '#218838', 
                                    },
                                },
                            }}
                        >
                            {cursos.map((curso) => (
                                <MenuItem
                                    key={curso.id}
                                    component={Link}
                                    href={`/dashboard/cursos/${curso.id}`}
                                    onClick={handleClose}
                                >
                                    {curso.nombre}
                                </MenuItem>
                            ))}
                        </Menu>

                        <Button
                            LinkComponent={Link}
                            href="/dashboard/eventos"
                        >
                            <Typography color={"white"}>Eventos</Typography>
                        </Button>

                        <Button
                            onClick={logout}
                        >
                            <Typography color={"white"}>Cerrar sesión</Typography>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
