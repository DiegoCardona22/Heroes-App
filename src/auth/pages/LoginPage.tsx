// @packages
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

// @scripts
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { handleOnLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";

    handleOnLogin("Diego Cardona");
    navigate(lastPath, { replace: true });
  };

  return (
    <div className="container mt-5">
      <h1>Login Page</h1>
      <hr />

      <button className="btn btn-primary" type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
