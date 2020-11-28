import React, { useState, useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "../MovieContext";

const MovieList = () => {
  // Consume it
  // const value = useContext(MovieContext);
  const [movies, setMovies] = useContext(MovieContext);

  // const [movies, setMovies] = useState([
  //   {
  //     name: "Harry Poter",
  //     price: 10,
  //     id: 23432,
  //   },
  //   {
  //     name: "Game of thrones ",
  //     price: 10,
  //     id: 23432,
  //   },
  //   {
  //     name: "Inception",
  //     price: 10,
  //     id: 23552,
  //   },
  // ]);
  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.name} price={movie.price} name={movie.name} />
      ))}
    </div>
  );
};

export default MovieList;
