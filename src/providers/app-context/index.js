import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// initial state
const initialState = { lang: "en", dir: "ltr" };

const AppContextProvider = ({ children }) => {
  const [state] = React.useState(initialState);

  const theme = createTheme({
    direction: state.dir,
    palette: {
      mode: "dark",
      background: {
        default: "#14181c",
        paper: "#2c3440",
      },

      primary: {
        main: "#00c030",
        light: "#4caf50",
      },
      secondary: {
        main: "#29b6f6",
      },
    },
    typography: {
      fontFamily: `IBM_Plex_Sans`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContext.Provider
        value={{
          lang: state.lang,
          dir: state.dir,
        }}
      >
        {children}
        <ToastContainer />
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default AppContextProvider;

export const AppContext = React.createContext();
AppContext.displayName = "AppContext";
