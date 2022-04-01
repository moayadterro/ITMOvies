import React from "react";
import AppContextProvider from "./app-context";
import AuthContextProvider from "./auth-context";

const Providers = ({ children }) => {
  return (
    <AppContextProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </AppContextProvider>
  );
};

export default Providers;
