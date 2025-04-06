import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/logo.png";
import api from "../services/axios";
import CustomModal from "../components/CustomModal";

function Cadastro() {
  const styles = getStyles();
  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    NIF: "",
    senha: "",
  });
  
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    title: "",
    message: "",
    isSuccess: false,
    type: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    CadastroUsuario();
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    if (modalInfo.isSuccess) {
      navigate("/principal");
    }
  };

  async function CadastroUsuario() {
    await api.postCadastro(usuario).then(
      (response) => {
        setModalInfo({
          title: "Sucesso!",
          message: response.data.message,
          isSuccess: true,
          type: "success",
        });
        setModalOpen(true);
        localStorage.setItem("authenticated", true);
      },
      (error) => {
        console.log(error);
        setModalInfo({
          title: "Erro!",
          message: error.response?.data?.error || "Erro ao cadastrar usuário",
          isSuccess: false,
          type: "error",
        });
        setModalOpen(true);
      }
    );
  }

  return (
    <Container component="main" sx={styles.container}>
      <Box component="form" sx={styles.form} onSubmit={handleSubmit} noValidate>
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            width: "280px",
            height: "auto",
            mb: 4,
            border: 5,
            borderColor: "white",
            borderRadius: 4,
          }}
        />
        <TextField
          id="nome"
          autoComplete="off"
          placeholder="nome"
          name="nome"
          margin="normal"
          value={usuario.nome}
          onChange={onChange}
          sx={styles.textField}
        />
        <TextField
          id="email"
          autoComplete="off"
          placeholder="e-mail"
          name="email"
          margin="normal"
          value={usuario.email}
          onChange={onChange}
          sx={styles.textField}
        />
        <TextField
          id="NIF"
          autoComplete="off"
          placeholder="NIF"
          type="number"
          name="NIF"
          margin="normal"
          value={usuario.NIF}
          onChange={onChange}
          sx={styles.textField}
        />
        <TextField
          id="senha"
          autoComplete="off"
          placeholder="senha"
          name="senha"
          margin="normal"
          value={usuario.senha}
          onChange={onChange}
          sx={styles.textField}
        />
        <Button
          variant="contained"
          onClick={CadastroUsuario}
          sx={styles.buttonCadastro}
        >
          Cadastre-se
        </Button>
        <Button
          component={Link}
          to="/login"
          variant="text"
          sx={styles.buttonToLogin}
        >
          Login
        </Button>
        <CustomModal
          open={modalOpen}
          onClose={handleCloseModal}
          title={modalInfo.title}
          message={modalInfo.message}
          type={modalInfo.type}
          buttonText="Fechar"
        />
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
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "80.6vh",
      minWidth: "100%",
    },
    form: {
      mt: 8,
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
      width: { xs: "90%", sm: "70%", md: "35vh" },
      height: "5.5vh",
      backgroundColor: "white",
      display: "flex",
      border: "0px transparent",
      borderRadius: 4,
    },
    buttonCadastro: {
      "&.MuiButton-root": {
        border: "none",
        boxShadow: "none",
        "&:hover": {
          border: "none",
          backgroundColor: "rgba(255, 0, 0, 0.55)",
        },
        "&:focus": { border: "none", outline: "none" },
        "&:active": {
          border: "none",
          outline: "none",
          boxShadow: "none",
        },
      },
      mt: 4,
      color: "white",
      backgroundColor: "rgba(255, 0, 0, 1)",
      width: 135,
      height: 45,
      fontWeight: 600,
      fontSize: 15,
      borderRadius: 15,
      textTransform: "none",
    },
    buttonToLogin: {
      color: "rgb(152, 0, 0)",
      backgroundColor: "transparent",
      fontWeight: "bold",
      fontSize: 15.5,
      textDecoration: "underline",
      textDecorationThickness: "1.5px",
      textUnderlineOffset: "4px",
      mt: 2,
      textTransform: "none",
      "&:hover": {
        textDecoration: "underline",
        backgroundColor: "transparent",
        textDecorationThickness: "1.5px",
        textUnderlineOffset: "4px",
        color: "rgb(167, 63, 63)",
      },
      "&:focus": { textDecoration: "underline" },
      "&:active": { textDecoration: "underline" },
    },
  };
}

export default Cadastro;
