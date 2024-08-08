import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function CursoLayout({children}){
    return (
        <div>
            <Box padding="15px" >
                <Stack direction="row">
                    <Button 
                      component={Link}
                      href="/cursos/1"
                    >
                        <Typography>
                            Actividades
                        </Typography>
                    </Button>
                    <Button 
                      component={Link}
                      href="/cursos/1/miembros"
                    >
                        <Typography>
                            Miembros
                        </Typography>
                    </Button>
                </Stack>
            </Box>
            {children}
        </div>
    );
}