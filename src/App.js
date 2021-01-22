import React, { createContext, useReducer } from "react";
import "./App.css";
import Container from "./components/Container";
import theme from "./components/MUI-Theme";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
export const UserContext = createContext();

const initialUser = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  gender: "",
  course: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "firstname":
      return { ...state, firstName: action.value };
    case "lastname":
      return { ...state, lastName: action.value };
    case "email":
      return { ...state, email: action.value };
    case "password":
      return { ...state, password: action.value };
    case "gender":
      return { ...state, gender: action.value };
    case "course":
      return { ...state, course: action.value };
    default:
      return state;
  }
};

function App() {
  const [user, dispatch] = useReducer(reducer, initialUser);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserContext.Provider value={{ User: user, UserDispatch: dispatch }}>
        <Container />
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
