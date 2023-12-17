// @packages
import { useReducer } from "react";

// @scripts
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

// @types
import { types } from "../types/types";

// @interfaces
interface IAuthProviderProps {
  children: JSX.Element | JSX.Element[];
}

interface IAuthProviderValue {
  handleOnLogin: (name?: string) => void;
  handleOnLogout: () => void;
  logged: boolean;
  user: {
    name?: string;
    id?: string;
  };
}

const init = () => {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  return {
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, {}, init);

  const handleOnLogin = (name = "") => {
    const user = { id: "ABC", name };
    const action = { type: types.login, payload: user };
    localStorage.setItem("user", JSON.stringify(user));

    dispatch(action);
  };

  const handleOnLogout = () => {
    localStorage.removeItem("user");
    const action = { type: types.logout };

    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        handleOnLogin,
        handleOnLogout,
      } as IAuthProviderValue}
    >
      {children}
    </AuthContext.Provider>
  );
};
