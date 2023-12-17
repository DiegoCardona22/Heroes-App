// @packages
import { Routes, Route, Navigate } from "react-router-dom";

// @scripts
import { DcPage, MarvelPage, SearchPage, HeroPage } from "../../heroes";
import { Navbar } from "../../ui";

const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-2">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:heroId" element={<HeroPage />} />

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};

export default HeroesRoutes;
