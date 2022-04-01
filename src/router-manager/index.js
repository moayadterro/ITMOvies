import React from "react";
import ScrollToTop from "utils/hooks/scroll-top";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "providers/auth-context";
import routes from "./routes";

const RedirectUrlAfterLogin = "/";
const loginUrl = "/signin";
//Note: write your route in the routes module file (routes.js) - it will automaticlly be here
function RouterManager() {
  const { isAuthenticated, isAdmin } = React.useContext(AuthContext);

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          {routes.map(({ path, component: Component, routeType }, key) => {
            if (routeType === "auth" && isAuthenticated)
              return (
                <Route
                  key={key}
                  path={path}
                  element={<Navigate to={RedirectUrlAfterLogin} />}
                />
              );
            else if (routeType === "admin" && !isAdmin) {
              return (
                <Route
                  key={key}
                  path={path}
                  element={<Navigate to={loginUrl} />}
                />
              );
            } else
              return <Route key={key} path={path} element={<Component />} />;
          })}

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default RouterManager;
