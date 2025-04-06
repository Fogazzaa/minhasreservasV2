import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const Footer = () => {
  const styles = getStyles();
  return (
    <Box sx={styles.footer}>
      <Typography sx={styles.footerText}>
        &copy; Desenvolvido por: Vinicius Fogaça, Maria Júlia e Maria Fernanda
      </Typography>
    </Box>
  );
};

function getStyles() {
  return {
    footer: {
      backgroundColor: "rgba(177, 16, 16, 1)",
      width: "210vh",
      height: "7vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderTop: "7px solid white",
      marginTop: "auto",
    },
    footerText: {
      color: "white",
      fontSize: 18,
    },
  };
}

export default Footer;
