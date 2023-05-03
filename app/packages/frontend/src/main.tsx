import { StrictMode } from "react";

import { ThemeProvider, createTheme } from "@mui/material";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./app/app";
import ApolloContainer from "./app/containers/ApolloContainer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1a73e8",
    },
    background: {
      default: "#ffffff",
    },
    secondary: { main: "#ffffff" },
    text: {
      primary: "#000000",
      secondary: "#757575",
    },
    divider: "#F5F5F5",
  },
  typography: {
    fontFamily: "Open Sans, cursive",
    h6: {
      fontFamily: "Open Sans, cursive",
      fontWeight: 600,
    },
    h1: {
      // fontFamily: "bungee, cursive",
      // fontSize: "2.5rem",
    },
    body2: {
      // fontFamily: "Road Rage, cursive",
      // fontSize: "1.5rem",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <ApolloContainer>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ApolloContainer>
  </StrictMode>,
);
