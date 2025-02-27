import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../axios/axios";

function Login() {
  const [usuario, setUsuario] = useState({
    email: "",
    senha: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Login();
  };

  const navigate = useNavigate();

  async function Login() {
    await api.postLogin(usuario).then(
      (response) => {
        alert(response.data.message);
        navigate("/principal");
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
          mt: 25,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography component="h1" variant="h5">
          Login - Reservas
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
            id="email"
            label="e-mail"
            name="email"
            margin="normal"
            value={usuario.email}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            id="senha"
            label="senha"
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
            to="/cadastro"
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
            Cadastro
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
