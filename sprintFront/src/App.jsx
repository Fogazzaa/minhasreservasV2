import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import ProtectedRouter from "./components/ProtectedRoute";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Principal from "./pages/Principal";
import Reserva from "./pages/Reserva";
import DefaultLayout from "./components/DefaultLayout";

const theme = createTheme({
  typography: {
    fontFamily: "'Roboto Mono', monospace",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <DefaultLayout headerRender={1}>
                <Login />
              </DefaultLayout>
            }
          />
          <Route
            path="/cadastro"
            element={
              <DefaultLayout headerRender={1}>
                <Cadastro />
              </DefaultLayout>
            }
          />
          <Route
            path="/principal"
            element={
              <ProtectedRouter>
                <Principal />
              </ProtectedRouter>
            }
          />
          <Route
            path="/reserva"
            element={
              <ProtectedRouter>
                <Reserva />
              </ProtectedRouter>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
