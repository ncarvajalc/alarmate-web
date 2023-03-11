import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { urlHome, urlLogin, urlRegister } from "../App";
import { theme } from "../theme";

const NavBar = (props) => {
  const navigate = useNavigate();
  const isAuthenticated = props.isAuthenticated;
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              sx={{ color: theme.palette.black.main, textTransform: "none" }}
              onClick={() => {
                navigate(urlHome);
              }}
            >
              <Typography textAlign="center">Home</Typography>
            </Button>
            {isAuthenticated ? (
              <Button
                sx={{ color: theme.palette.black.main, textTransform: "none" }}
                onClick={() => {
                  props.setIsAuthenticated(false);
                  navigate(urlRegister);
                }}
              >
                <Typography textAlign="center">Cerrar sesión</Typography>
              </Button>
            ) : (
              <Button
                sx={{ color: theme.palette.black.main, textTransform: "none" }}
                onClick={() => {
                  navigate(urlLogin);
                }}
              >
                <Typography textAlign="center">Regístrate</Typography>
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
