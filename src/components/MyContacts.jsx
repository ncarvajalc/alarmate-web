import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Container,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  TextField,
  TableBody,
  Modal,
  Paper,
} from "@mui/material";
import { useState } from "react";
import Banner from "./Banner";

export default function MyContacts() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [pending, setPending] = useState(false);
  const handleReSubmit = () => {
    setOpen(false);
    setPending(true);
  };
  const [phone, setPhone] = useState("+57 315 123 456");
  const contacts = [
    {
      name: "Mamá",
      phone: "+57 315 123 456",
    },
  ];

  const [editMode, setEditMode] = useState(false);

  const handleChange = (event) => {
    setPhone(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        paddingTop: "20vh",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom>
          Contactos de emergencia
        </Typography>
        <TableContainer
          sx={{
            backgroundColor: "contrastLight.main",
          }}
          component={Paper}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Teléfono</TableCell>
                <TableCell>{/* Actions*/}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow key={contact.phone}>
                  <TableCell style={{ minWidth: "20vw" }}>
                    {contact.name}
                  </TableCell>
                  <TableCell>
                    {" "}
                    {!editMode ? (
                      phone
                    ) : (
                      <TextField
                        id="phone"
                        label="Teléfono"
                        variant="outlined"
                        value={phone}
                        type="number"
                        onChange={handleChange}
                        sx={{ width: "100%" }}
                      />
                    )}
                  </TableCell>
                  <TableCell align="right">
                    <Box px={"36px"}>
                      <Button
                        variant="contained"
                        color="primaryDark"
                        aria-label="edit"
                        onClick={() => setEditMode(!editMode)}
                        sx={{ marginRight: "8px" }}
                      >
                        {!editMode ? <EditIcon /> : "Listo"}
                      </Button>
                      <Button
                        variant="contained"
                        color={!pending ? "lightSecondary" : "secondaryGray"}
                        aria-label=""
                        sx={{
                          textTransform: "none",
                          color: "white.main",
                          borderRadius: "12px",
                        }}
                        onClick={handleOpen}
                      >
                        {!pending ? "Rechazado" : "Pendiente"}
                      </Button>
                      <Modal
                        hideBackdrop
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box
                          position="absolute"
                          top="50%"
                          left="50%"
                          sx={{
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          <Banner
                            body={
                              "Se le reenviará su solicitud al contacto ¿Desea continuar?"
                            }
                            title={"¿Deseas volver a mandar una solicitud?"}
                            leftButton={{
                              text: "Sí",
                              action: () => handleReSubmit(),
                            }}
                            rightButton={{
                              text: "Cancelar",
                              action: () => handleClose(),
                            }}
                          />
                        </Box>
                      </Modal>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
