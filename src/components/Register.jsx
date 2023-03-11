import { Button, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { urlLogin, urlMyContacts } from "../App";
import { theme } from "../theme.js";

// Create an MUI form for registering a new user. It needs an email and password and a submit button. It also has a link to redirect to the sign in page.
export default function Register({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState("");

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

  const handlePasswordConfirmationError = (value) => {
    if (value === "") {
      setPasswordConfirmationError(
        "La confirmación de contraseña es requerida"
      );
    } else if (value !== password) {
      setPasswordConfirmationError("Las contraseñas no coinciden");
    } else {
      setPasswordConfirmationError("");
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
            Regístrate
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
          <TextField
            required
            type={"password"}
            id="standard-required-password-confirmation"
            label="Confirmar contraseña"
            defaultValue={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            fullWidth
            variant="standard"
            onBlur={(e) => handlePasswordConfirmationError(e.target.value)}
            error={Boolean(passwordConfirmationError)}
            helperText={passwordConfirmationError}
            sx={{ marginBottom: 2 }}
          />

          <Button
            variant="contained"
            fullWidth
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
            Regístrate
          </Button>
          <Typography variant="body2">
            ¿Ya tienes cuenta?{" "}
            <Link
              to={urlLogin}
              style={{
                color: theme.palette.primary.main,
              }}
            >
              Inicia sesión
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
