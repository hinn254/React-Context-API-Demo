import React, { useState, useContext } from "react";
import { MovieContext } from "../MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [movies, setMovies] = useContext(MovieContext);

  const addMovie = (e) => {
    console.log("ADDD");
    e.preventDefault();
    let current = movies;
    let newMovie = {
      name,
      price,
    };
    setMovies([...current, newMovie]);
    // setMovies((previousMovies) => [
    //   ...previousMovies,
    //   { name: name, price: price },
    // ]);
  };

  return (
    <form onSubmit={addMovie}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button>submit</button>
    </form>
  );
};

export default AddMovie;
