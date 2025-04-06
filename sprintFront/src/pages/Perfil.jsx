import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import api from "../services/axios";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Typography from "@mui/material/Typography";

function Perfil() {
  const styles = getStyles();

  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    NIF: "",
    senha: "",
  });

  const [mostrarSenha, setMostrarSenha] = useState(false);

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
      <Box sx={styles.header}>
        <Button component={Link} to="/principal" sx={styles.buttonToPrincipal}>
          <ExitToAppIcon sx={styles.IconeLogout} />
        </Button>
      </Box>
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
          type={mostrarSenha ? "text" : "password"}
          placeholder="senha"
          name="senha"
          margin="normal"
          disabled
          value={usuario.senha || ""}
          sx={{ ...styles.textField, mt: 3 }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() =>
                      setMostrarSenha((previousState) => !previousState)
                    }
                    edge="end"
                    sx={{ color: "gray", mr: 0.1 }}
                  >
                    {mostrarSenha ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        <Button variant="contained" sx={styles.buttonAtualizar}>
          Atualizar
        </Button>
      </Box>
      <Box sx={styles.footer}>
      <Typography sx={styles.footerText}>
        &copy; Desenvolvido por: Vinicius Fogaça, Maria Júlia e Maria Fernanda
      </Typography>
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
      flex:1,
      flexDirection: "column",
      alignItems: "center",
      minHeight: "80.6vh",
      minWidth: "100%",
      pl: { sm: 0 },
      pr: { sm: 0 },
    },
    header: {
      backgroundColor: "rgba(177, 16, 16, 1)",
      width: "100%",
      height: "11vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      borderBottom: "7px solid white",
    },
    Iconeperfil: {
      width: 54,
      height: 54,
      borderRadius: "50%",
      backgroundColor: "darkred",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "4px solid white",
      color: "white",
    },
    IconeLogout: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      backgroundColor: "darkred",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "4px solid white",
      padding: "7px",
      color: "white",
    },
    logo: {
      width: "280px",
      height: "auto",
      mb: 4,
      border: 5,
      borderColor: "white",
      borderRadius: 4,
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
    footer: {
      backgroundColor: "rgba(177, 16, 16, 1)",
      width: "100%",
      height: "7vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderTop: "7px solid white",
      marginTop: "auto",
      mt:"3.5%",
    },
    footerText: {
      color: "white",
      fontSize: 18,
    },
  };
}

export default Perfil;
