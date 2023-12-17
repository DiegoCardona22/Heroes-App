// @packages
import { createContext } from "react";

type AuthContextType = {
  handleOnLogin: (name?: string) => void;
  handleOnLogout: () => void;
  logged?: boolean;
  user?: {
    name?: string,
    id?: string,
  };
};

export const AuthContext = createContext({} as AuthContextType);
