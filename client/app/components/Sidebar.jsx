import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export default function Sidebar() {
    return (
        <AppBar
            position="static"
        >
            <Container
                maxWidth="xl"
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
                                Jovenes
                            </Typography>
                        </Button>

                        <Button
                            LinkComponent={Link}
                            href="/actividades"
                        >
                            <Typography
                                color={"white"}
                            >
                                Actividades
                            </Typography>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
};