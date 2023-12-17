// @packages
import { Navigate } from "react-router-dom";
import { ReactNode, useContext } from "react";

// @scripts
import { AuthContext } from "../auth";

// @interfaces
interface IPublicRouteProps {
  children: ReactNode;
}

export const PublicRoute = ({ children }: IPublicRouteProps) => {
  const { logged } = useContext(AuthContext) as { logged: boolean };

  return !logged ? children : <Navigate to="/marvel" />;
};
