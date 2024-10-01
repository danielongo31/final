import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function CursoLayout({ children, params }) {
    
    const { cursoid } = params;

    return (
        <div>
            <Box padding="15px" bgcolor={"#40c15e"}>
                <Stack direction="row">
                    <Button
                        component={Link}
                        href={`/dashboard/cursos/${cursoid}`}
                    >
                        <Typography color={"white"}>
                            Actividades
                        </Typography>
                    </Button>
                    <Button
                        component={Link}
                        href={`/dashboard/cursos/${cursoid}/miembros`}
                    >
                        <Typography color={"white"}>
                            Miembros
                        </Typography>
                    </Button>
                    <Button
                        component={Link}
                        href={`/dashboard/cursos/${cursoid}/canjeo`}
                    >
                        <Typography color={"white"}>
                            Canjeo de puntos
                        </Typography>
                    </Button>
                </Stack>
            </Box>
            {children}
        </div>
    );
}