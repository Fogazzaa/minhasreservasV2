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

function Principal() {
  return (
    <Container component="main" maxWidth="xs">
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
        Home
      </Button>
    </Container>
  );
}

export default Principal;
