import React from "react";

import Cookies from "js-cookie";

import { decodeBase64, encodeBase64 } from "utils/base64";

import http from "utils/http";

// initial state
var initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  isAdmin: false,
};

const role = {
  user: "user",
  admin: "admin",
};

let userCookie = "usr";
let accessTokenCookie = "act";

let userBase64Object = Cookies.get(userCookie);
let base64Token = Cookies.get(accessTokenCookie);

if (userBase64Object && base64Token) {
  let user = JSON.parse(decodeBase64(userBase64Object));
  initialState = {
    isAuthenticated: true,
    user: user,
    token: decodeBase64(base64Token),
    isAdmin: user.role === role.admin,
  };
}

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      Cookies.set(
        userCookie,
        encodeBase64(JSON.stringify(action.payload.user)),
        {
          expires: 360,
        }
      );
      Cookies.set(accessTokenCookie, encodeBase64(action.payload.token), {
        expires: 360,
      });
      http.setAuthorizationToken(action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        isAdmin: action.payload.user.role === role.admin,
      };

    case "updateUser": {
      Cookies.set(
        userCookie,
        encodeBase64(JSON.stringify(action.payload.user))
      );
      return { ...state, user: action.payload.user };
    }
    case "logout":
      Cookies.remove(userCookie);
      Cookies.remove(accessTokenCookie);
      return { ...initialState };
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        token: state.token,
        isAdmin: state.isAdmin,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const AuthContext = React.createContext();
AuthContext.displayName = "AuthContext";
