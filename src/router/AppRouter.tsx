// @packages
import { Route, Routes } from "react-router-dom";

// @scripts
import HeroesRoutes from "../heroes/routes/HeroesRoutes";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const AppRouter = () => (
  <>
    <Routes>
      <Route
        path="login/*"
        element={
          <PublicRoute>
            <Routes>
              <Route path="/*" element={<LoginPage />} />
            </Routes>
          </PublicRoute>
        }
      />
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        }
      />
    </Routes>
  </>
);

export default AppRouter;
