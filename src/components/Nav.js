import React, { useContext } from "react";
import "./Nav.css";
import { MovieContext } from "../MovieContext";

const Nav = () => {
  const [movies] = useContext(MovieContext);
  return (
    <div className="Nav">
      <h1>Benny Hinn</h1>
      <p>List of movies: {movies.length}...</p>
    </div>
  );
};

export default Nav;
