// @packages
import queryString from "query-string";
import { ChangeEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// @scripts
import HeroCard from "../components/HeroCard";

// @hooks
import { useForm } from "../../hooks/useForm";

// @helpers
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { q = "" } = queryString.parse(location.search);
  const { searchText, onInputChange } = useForm({ searchText: q as string });

  const heroesFiltered = getHeroesByName(q as string);

  const showSearch = q?.length === 0;
  const showNoResults = (q?.length ?? 0) > 0 && heroesFiltered.length === 0;

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search Page</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              autoComplete="off"
              className="form-control"
              id="searchText"
              name="searchText"
              onChange={onInputChange}
              placeholder="Find your hero"
              type="text"
              value={searchText}
            />
            <button className="btn btn-outline-primary mt-2">Search...</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a hero
          </div>

          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showNoResults ? "" : "none" }}
          >
            No hero with <b>{q}</b>
          </div>

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
