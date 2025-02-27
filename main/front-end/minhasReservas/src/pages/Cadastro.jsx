import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import api from "../axios/axios";
import { Link } from "react-router-dom";

function Cadastro() {
  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    NIF: "",
    senha: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Cadastro();
  };

  async function Cadastro() {
    await api.postCadastro(usuario).then(
      (response) => {
        alert(response.data.message);
      },
      (error) => {
        console.log(error);
        alert(error.response.data.error);
      }
    );
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Avatar
          sx={{
            margin: 1,
            backgroundColor: "#000000",
          }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastro - Reservas
        </Typography>
        <Box
          component="form"
          sx={{
            mt: 1,
          }}
          onSubmit={handleSubmit}
          noValidate
        >
          <TextField
            required
            fullWidth
            id="nome"
            label="  nome"
            name="nome"
            margin="normal"
            value={usuario.nome}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            id="email"
            label="  e-mail"
            name="email"
            margin="normal"
            value={usuario.email}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            id="NIF"
            label="  NIF"
            name="NIF"
            margin="normal"
            value={usuario.NIF}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            id="senha"
            label="  senha"
            name="senha"
            type="senha"
            margin="normal"
            value={usuario.senha}
            onChange={onChange}
          />
          <Button
            sx={{
              mt: 3,
              mb: 2,
              color: "white",
              backgroundColor: "#000000",
              display: "flex",
            }}
            fullWidth
            type="submit"
            variant="contained"
          >
            Entrar
          </Button>
          <Button
            component={Link}
            to="/login"
            sx={{
              mt: 3,
              mb: 2,
              color: "white",
              backgroundColor: "#000000",
              display: "flex",
            }}
            fullWidth
            type="submit"
            variant="contained"
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Cadastro;
