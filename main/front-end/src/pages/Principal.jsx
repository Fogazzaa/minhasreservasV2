import { useState, useEffect } from "react";
import api from "../services/axios";

import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";

import TableHead from "@mui/material/TableHead";

import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";

function Principal() {
  const [salas, setSalas] = useState([]);

  async function getSalas() {
    await api.getSalas().then(
      (response) => {
        console.log(response.data.salas);
        setSalas(response.data.salas);
      },
      (error) => {
        console.log("Erro", error);
      }
    );
  }

  const listSalas = salas.map((sala) => {
    return (
      <TableRow key={sala.id_sala}>
        <TableCell align="center">{sala.nome}</TableCell>
        <TableCell align="center">{sala.descricao}</TableCell>
        <TableCell align="center">{sala.bloco}</TableCell>
        <TableCell align="center">{sala.tipo}</TableCell>
        <TableCell align="center">{sala.capacidade}</TableCell>
      </TableRow>
    );
  });

  useEffect(() => {
    getSalas();
  }, []);

  return (
    <div>
      <h5>Lista de salas</h5>
      <TableContainer component={Paper} style={{ margin: "2px" }}>
        <Table size="small">
          <TableHead style={{ backgroundColor: "gray", border: "solid" }}>
            <TableRow>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Descrição</TableCell>
              <TableCell align="center">Bloco</TableCell>
              <TableCell align="center">Tipo</TableCell>
              <TableCell align="center">Capacidade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{listSalas}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Principal;
