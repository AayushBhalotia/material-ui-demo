import React from "react";
import "./App.css";
import Container from "./components/Container";
import theme from "./components/MUI-Theme";
import { ThemeProvider, CssBaseline } from "@material-ui/core";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container />
    </ThemeProvider>
  );
}

export default App;
