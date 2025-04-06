import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

function Logout() {
  console.log("teste logout");
  localStorage.removeItem("authenticated");
  navigate("/");
}

const HeaderPrincipal = ({}) => {
  const styles = getStyles();
  return (
    <Box sx={styles.header}>
      <img src={logo} alt="Logo" style={styles.logo} />
      <Button component={Link} to="/perfil" sx={styles.buttonPerfil}>
        <PersonIcon sx={styles.Iconeperfil} />
      </Button>

      <Button component={Link} to="/" sx={styles.buttonHome} onClick={Logout}>
        <ExitToAppIcon sx={styles.IconeLogout} />
      </Button>
    </Box>
  );
};

function getStyles() {
  return {
    header: {
      backgroundColor: "rgba(177, 16, 16, 1)",
      width: "100%",
      height: "11vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      borderBottom: "7px solid white",
    },
    logo: {
      width: "230px",
      height: "auto",
      marginRight: "1400px",
      border: "4px solid white",
      borderRadius: 15,
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
    buttonHome: {
      mr: 2,
    },
  };
}

export default HeaderPrincipal;
