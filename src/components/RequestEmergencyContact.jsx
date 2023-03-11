import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { urlHome } from "../App";

export default function RequestEmergencyContact() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <Banner
        title={"Solicitud contacto de emergencia"}
        body={
          "Usuario quiere que seas su contacto de emergencia para su alarma de las 7:00am los días lunes, martes, miércoles y jueves. Como contacto de emergencia, si detectamos que Usuario no se levantó, se te notificará via SMS que lo llames para que se levante. ¿Deseas ser su contacto de emergencia?"
        }
        leftButton={{
          text: "Aceptar",
          action: () => {
            navigate(urlHome);
          },
        }}
        rightButton={{
          text: "Rechazar",
          action: () => {
            navigate(urlHome);
          },
        }}
      ></Banner>
    </Box>
  );
}

function Banner({ title, body, leftButton, rightButton }) {
  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "center",
        width: "512px",
        padding: "16px",
        backgroundColor: "contrastLight.main",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          height: "100%",
          width: "100%",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "black.main",
            fontWeight: "medium",
            fontSize: 20,

            marginBottom: "1rem",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: "black.main",
            textAlign: "left",
            fontSize: 14,
            marginBottom: "1rem",
          }}
        >
          {body}
        </Typography>
        <Box
          sx={{
            display: "flex",

            height: "100%",
            width: "100%",
            backgroundColor: "contrastLight.main",
          }}
        >
          <Button
            variant="text"
            sx={{
              color: "secondaryGray.main",
              marginRight: "1rem",
            }}
            onClick={leftButton.action}
          >
            {leftButton.text}
          </Button>
          <Button
            variant="text"
            sx={{
              color: "lightSecondary.main",
            }}
            onClick={rightButton.action}
          >
            {rightButton.text}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
