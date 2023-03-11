import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import landingImg from "./assets/Landing.jpg";
import fede from "./assets/fede.jpg";
import nico from "./assets/nico.jpg";
import nata from "./assets/nata.jpg";
import mari from "./assets/mari.jpg";
import stars from "./assets/stars.png";

export default function Home() {
  const testimonies = [
    {
      name: "Federico Melo",
      image: fede,
      testimony: "“Ya no me dejo vencer del sueño”",
    },
    {
      name: "Nicolás Carvajal",
      image: nico,
      testimony: "“Es imposible apagar la alarma por accidente”",
    },
    {
      name: "Natalia Quiroga",
      image: nata,
      testimony: "“Mi mami de contacto de emergencia no falla”",
    },
    {
      name: "Mariana Ruiz",
      image: mari,
      testimony: "“Ahora sí me levanto a clase de 6:30”",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "90vh",
          width: "100vw",
          backgroundColor: "white.main",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "100vh",
            width: "50vw",
            backgroundColor: "white.main",
          }}
        >
          <img
            style={{
              objectFit: "cover",
              width: "100%",
            }}
            src={landingImg}
            alt="Alarmate"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100vh",
            width: "50vw",
            backgroundColor: "white.main",
            padding: "16px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "black.main",
              fontWeight: "400",
              fontSize: 96,
              marginBottom: "1rem",
            }}
          >
            Alarmate
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "black.main",
              textAlign: "left",
              fontSize: 16,
              marginBottom: "1rem",
            }}
          >
            Nunca más dejes de levantarte . Con Alarmate puedes poner múltiples
            alarmas en un solo toque, agregar contactos de emergencia y nunca
            apagarás por accidente tus alarmas.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "90vh",
          width: "100vw",
          backgroundColor: "contrastLight.main",
          padding: "32px",
          paddingRight: 0,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "black.main",
            fontWeight: "bold",
            fontSize: "48px",
            marginBottom: "1rem",
          }}
        >
          Testimonios
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",

            padding: "16px",

            overflowX: "scroll",
            overflowY: "hidden",
          }}
        >
          {testimonies.map((t) => (
            <TestimonyBubble
              key={t.name}
              name={t.name}
              image={t.image}
              testimony={t.testimony}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function TestimonyBubble({ name, image, testimony }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        marginRight: "1rem",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "black.main",
          fontSize: "48px",
          marginBottom: "1rem",
          letterSpacing: "0.1px",
        }}
      >
        {name}
      </Typography>

      <img
        style={{
          objectFit: "cover",
          width: "400px",
          borderRadius: "50%",
          marginBottom: "1rem",
        }}
        src={image}
        alt="Imagen testimonio"
      />
      <img
        style={{
          width: "400px",
        }}
        src={stars}
        alt="5 estrellas"
      />
      <Typography
        variant="p"
        sx={{
          color: "black.main",
          fontSize: "20px",
          marginBottom: "1rem",
        }}
      >
        {testimony}
      </Typography>
    </Box>
  );
}
