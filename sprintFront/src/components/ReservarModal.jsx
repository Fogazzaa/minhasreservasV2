import React, { useState } from "react";
import { Modal, Box, Typography, Button, TextField } from "@mui/material";
import { LocalizationProvider, DatePicker, TimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ptBR } from "date-fns/locale";
import api from "../services/axios";
import { getToday } from "../utils/dateUtils";
import CustomModal from "./CustomModal";
import { useNavigate } from "react-router-dom";

export default function ModalReservar({ isOpen, onClose, idSala }) {
  const styles = getStyles();

  const [data, setData] = useState(new Date());
  const [horaInicio, setHoraInicio] = useState(new Date());
  const [horaFim, setHoraFim] = useState(new Date(new Date().getTime() + 60 * 60 * 1000));
  const [modalVisible, setModalVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState({ type: "success", title: "", message: "" });
  const [idUsuario] = useState(localStorage.getItem("idUsuario"));
  const navigate = useNavigate();

  function ajustarHoraFim() {
    const novaHoraFim = new Date(horaInicio.getTime() + 60 * 60 * 1000);
    setHoraFim(novaHoraFim);
  }

  function formatarHoraComSegundosZero(date) {
    const hora = date.getHours().toString().padStart(2, "0");
    const minuto = date.getMinutes().toString().padStart(2, "0");
    return `${hora}:${minuto}:00`;
  }

  async function handleReserva() {
    if (horaFim <= horaInicio) ajustarHoraFim();

    const reserva = {
      data: data.toISOString().split("T")[0],
      hora_inicio: formatarHoraComSegundosZero(horaInicio),
      hora_fim: formatarHoraComSegundosZero(horaFim),
      fk_id_usuario: idUsuario,
      fk_id_sala: idSala,
    };

    try {
      const response = await api.postReserva(reserva);
      setModalInfo({
        type: "success",
        title: "Sucesso",
        message: response.data.message,
      });
      setModalVisible(true);
    } catch (error) {
      setModalInfo({
        type: "error",
        title: "Erro",
        message: error.response?.data?.error || "Erro desconhecido",
      });
      setModalVisible(true);
    }
  }

  function handleModalClose() {
    setModalVisible(false);
    if (modalInfo.type === "success") {
      navigate("/principal");
      onClose();
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
      <Modal open={isOpen} onClose={onClose}>
        <Box sx={styles.modalBox}>
          <Typography variant="h6" sx={styles.title}>Reservar</Typography>

          <Typography variant="subtitle2" sx={styles.inputTitle}>Data</Typography>
          <DatePicker
            value={data}
            onChange={(newValue) => newValue && setData(newValue)}
            minDate={getToday()}
            format="dd-MM-yyyy"
            sx={styles.input}
            renderInput={(params) => <TextField fullWidth margin="normal" {...params} />}
          />

          <Typography variant="subtitle2" sx={styles.inputTitle}>Hora de Início</Typography>
          <TimePicker
            value={horaInicio}
            onChange={(newValue) => {
              if (newValue) {
                const ajustada = new Date(newValue);
                ajustada.setSeconds(0);
                setHoraInicio(ajustada);
                ajustarHoraFim();
              }
            }}
            ampm={false}
            sx={styles.input}
            renderInput={(params) => <TextField fullWidth margin="normal" {...params} />}
          />

          <Typography variant="subtitle2" sx={styles.inputTitle}>Hora de Fim</Typography>
          <TimePicker
            value={horaFim}
            onChange={(newValue) => {
              if (newValue) {
                const ajustada = new Date(newValue);
                ajustada.setSeconds(0);
                setHoraFim(ajustada);
              }
            }}
            ampm={false}
            sx={styles.input}
            renderInput={(params) => <TextField fullWidth margin="normal" {...params} />}
          />

          <Box sx={styles.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              onClick={onClose}
              sx={styles.buttonCancelar}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleReserva}
              sx={styles.buttonCancelar}
            >
              Reservar
            </Button>
          </Box>
        </Box>
      </Modal>

      <CustomModal
        open={modalVisible}
        onClose={handleModalClose}
        title={modalInfo.title}
        message={modalInfo.message}
        type={modalInfo.type}
      />
    </LocalizationProvider>
  );
}

function getStyles() {
  return {
    modalBox: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: 300,
      backgroundColor: "rgb(227, 227, 227)",
      boxShadow: 24,
      p: 4,
      borderRadius: 2,
      border: "none"
    },
    title: {
      fontWeight: "bold",
      marginBottom: 2,
      fontSize: 30,
    },
    inputTitle: {
      marginTop: 1,
      marginBottom: 1,
      fontSize: 15,
    },
    input: {
      backgroundColor: "white",
      borderRadius: 1,
      marginBottom: 0.5,
    },
    buttonContainer: {
      mt: 2,
      mb: 2,
      display: "flex",
      justifyContent: "space-between",
    },
    buttonCancelar: {
      backgroundColor: "rgba(177, 16, 16, 1)",
      width: "45%",
      borderRadius: 1,
    },
    buttonReservar: {
      backgroundColor: "rgba(177, 16, 16, 1)",
      width: "45%",
      borderRadius: 1,
    },
  };
}
