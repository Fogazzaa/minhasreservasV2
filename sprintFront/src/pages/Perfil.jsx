import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/logo.png";
import api from "../services/axios";
import CustomModal from "../components/CustomModal";

function Perfil() {
  const styles = getStyles();
  
  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    NIF: "",
    senha: "",
  });

  useEffect(() => {
    const fetchUsuario = async () => {
      const idUsuario = localStorage.getItem("idUsuario");

      if (!idUsuario) {
        console.error("ID do usuário não encontrado no localStorage");
        return;
      }

      try {
        const response = await api.getUsuarioById(idUsuario);
        setUsuario(response.data.usuario);
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    };

    fetchUsuario();
  }, []);

  return (
    <Container component="main" sx={styles.container}>
      <Box component="form" sx={styles.form} noValidate>
        <Box component="img" src={logo} alt="Logo" sx={styles.logo} />
        <TextField
          id="nome"
          placeholder="nome"
          name="nome"
          margin="normal"
          disabled
          value={usuario.nome || ""}
          sx={styles.textField}
        />
        <TextField
          id="email"
          placeholder="e-mail"
          name="email"
          margin="normal"
          disabled
          value={usuario.email || ""}
          sx={styles.textField}
        />
        <TextField
          id="NIF"
          placeholder="NIF"
          name="NIF"
          margin="normal"
          disabled
          value={usuario.NIF || ""}
          sx={styles.textField}
        />
        <TextField
          id="senha"
          placeholder="senha"
          name="senha"
          type="password"
          margin="normal"
          disabled
          value={usuario.senha || ""}
          sx={{ ...styles.textField, mt: 3 }}
        />
        <Button
          variant="contained"
          sx={styles.buttonAtualizar}
        >
          Atualizar
        </Button>
      </Box>
    </Container>
  );
}

function getStyles() {
  return {
    container: {
      backgroundImage: `url(../../img/fundo.png)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "80.6vh",
      minWidth: "100%",
    },
    form: {
      mt: 12,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      paddingRight: 6,
      paddingLeft: 6,
      paddingTop: 9,
      paddingBottom: 7,
      borderRadius: 10,
    },
    logo: {
      width: "280px",
      height: "auto",
      mb: 4,
      border: 5,
      borderColor: "white",
      borderRadius: 4,
    },
    textField: {
      "& .MuiOutlinedInput-root": {
        "& fieldset": { border: "none" },
        "&:hover fieldset": { border: "none" },
        "&.Mui-focused fieldset": { border: "none" },
      },
      "& input::placeholder": {
        fontSize: "17px",
        color: "black",
      },
      width: "35vh",
      height: "5.5vh",
      backgroundColor: "white",
      display: "flex",
      border: "0px transparent",
      borderRadius: 4,
    },
    buttonAtualizar: {
      "&.MuiButton-root": {
        border: "none",
        boxShadow: "none",
        "&:hover": {
          border: "none",
          backgroundColor: "rgba(255, 0, 0, 0.55)",
        },
      },
      mt: 4,
      color: "white",
      backgroundColor: "rgba(255, 0, 0, 1)",
      width: 95,
      height: 45,
      fontWeight: 600,
      fontSize: 15,
      borderRadius: 15,
      textTransform: "none",
    },
  };
}

export default Perfil;
