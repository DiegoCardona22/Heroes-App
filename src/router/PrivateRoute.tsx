// @packages
import { Navigate, useLocation } from "react-router-dom";
import { ReactNode, useContext } from "react";

// @scripts
import { AuthContext } from "../auth";

// @interfaces
interface IPrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: IPrivateRouteProps) => {
  const { logged } = useContext(AuthContext) as { logged: boolean };
  const { pathname, search } = useLocation();

  const lastPath = `${pathname}${search}`;
  localStorage.setItem("lastPath", lastPath);

  return logged ? children : <Navigate to="/login" />;
};
