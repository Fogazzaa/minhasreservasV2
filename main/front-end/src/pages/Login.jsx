import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/axios";
import logo from "../../img/logo.png";

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
    <Container
      component="main"
      sx={{
        mt: -1,
        mb: -1,
        ml: -1,
        mr: -1,
        backgroundImage: `url(../../img/fundo.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "300vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        maxHeight: "100vh",
        minWidth: "100.85%",
      }}
    >
      <Box
        sx={{
          mt: -10,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          component="form"
          sx={{
            mt: 18,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(255, 238, 238, 0.62)",
            paddingRight: 10,
            paddingLeft: 10,
            paddingTop: 11,
            paddingBottom: 5,
            borderRadius: 10,
          }}
          onSubmit={handleSubmit}
          noValidate
        >
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              width: "300px",
              height: "auto",
              mb: 3,
              border: 6,
              borderColor: "white",
              borderRadius: 4,
            }}
          />
          <TextField
            required
            fullWidth
            id="email"
            placeholder="e-mail"
            name="email"
            margin="normal"
            value={usuario.email}
            onChange={onChange}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { border: "none" }, // Remove a borda no modo padrão
                "&:hover fieldset": { border: "none" }, // Remove a borda ao passar o mouse
                "&.Mui-focused fieldset": { border: "none" }, // Remove a borda ao focar
              },
              width: "35vh",
              height: "5.5vh",
              backgroundColor: "white",
              display: "flex",
              border: "0px transparent",
              borderRadius: 10,
            }}
          />
          <TextField
            required
            fullWidth
            id="senha"
            placeholder="senha"
            name="senha"
            type="password"
            margin="normal"
            value={usuario.senha}
            onChange={onChange}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { border: "none" },
                "&:hover fieldset": { border: "none" },
                "&.Mui-focused fieldset": { border: "none" },
              },
              width: "35vh",
              height: "5.5vh",
              backgroundColor: "white",
              display: "flex",
              border: "none",
              boxShadow: "none",
              borderRadius: 10,
            }}
          />
          <Button
            sx={{
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
              mt: 3,
              color: "white",
              backgroundColor: "rgba(255, 0, 0, 1)",
              width: 120,
              fontWeight: 550,
              fontSize: 14,
            }}
            type="submit"
            variant="contained"
          >
            Entrar
          </Button>
          <Button
            component={Link}
            to="/cadastro"
            sx={{
              color: "rgb(152, 0, 0)",
              backgroundColor: "transparent",
              fontWeight: "bold",
              fontSize: 14,
              textDecoration: "underline",
              textDecorationThickness: "1.5px",
              textUnderlineOffset: "4px",
              mt: 2,
              "&:hover": {
                textDecoration: "underline",
                backgroundColor: "transparent",
                textDecorationThickness: "1.5px",
                textUnderlineOffset: "4px",
                color: "rgb(167, 63, 63)",
              },
              "&:focus": {
                textDecoration: "underline",
              },
              "&:active": {
                textDecoration: "underline",
              },
            }}
            type="submit"
            variant="text"
          >
            Cadastro
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
