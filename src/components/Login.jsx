import { Button, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { urlMyContacts, urlRegister } from "../App";
import { theme } from "../theme.js";

// Create an MUI form for registering a new user. It needs an email and password and a submit button. It also has a link to redirect to the sign in page.
export default function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .trim()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleError = (value) => {
    if (value === "") {
      setEmailError("El correo es requerido");
    } else if (validateEmail(value) == null) {
      setEmailError("No es un correo válido");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordError = (value) => {
    if (value === "") {
      setPasswordError("La contraseña es requerida");
    } else if (value.length < 8) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres");
    } else {
      setPasswordError("");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{
              marginBottom: 2,
            }}
          >
            Inicia sesión
          </Typography>

          <TextField
            required
            id="standard-required"
            label="Correo"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            variant="standard"
            onBlur={(e) => handleError(e.target.value)}
            error={Boolean(emailError)}
            helperText={emailError}
            sx={{ margin: 2 }}
          />

          <TextField
            required
            type={"password"}
            id="standard-required-password"
            label="Contraseña"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            variant="standard"
            onBlur={(e) => handlePasswordError(e.target.value)}
            error={Boolean(passwordError)}
            helperText={passwordError}
            sx={{ marginBottom: 2 }}
          />

          <Button
            variant="contained"
            fullWidth
            disabled={Boolean(
              emailError || passwordError || email === "" || password === ""
            )}
            onClick={() => {
              setIsAuthenticated(true);
              navigate(urlMyContacts);
            }}
            sx={{
              textTransform: "none",
              borderRadius: "100px",
              marginBottom: 2,
            }}
          >
            Ingresar
          </Button>
          <Typography variant="body2">
            ¿No tienes una cuenta?{" "}
            <Link
              to={urlRegister}
              style={{
                color: theme.palette.primary.main,
              }}
            >
              Regístrate
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
