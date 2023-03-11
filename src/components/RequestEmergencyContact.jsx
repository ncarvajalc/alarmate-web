import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { urlHome } from "../App";
import Banner from "./Banner";

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
      />
    </Box>
  );
}
