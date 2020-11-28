import React, { useState, createContext } from "react";
// export two diff things

// initiate context outside the Provide component - give it same title as the file - export it
export const MovieContext = createContext();

// whenever we want to use the movieprovider we import the moviecontext

// provide info it holds to diff components
export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Poter",
      price: 10,
      id: 23432,
    },
    {
      name: "Game of thrones ",
      price: 10,
      id: 23432,
    },
    {
      name: "Inception",
      price: 10,
      id: 23552,
    },
  ]);
  // return the context created above.Provider
  return (
    // pass an array with both state [mov,set]
    <MovieContext.Provider value={[movies, setMovies]}>
      {/* components */}
      {/* render all the children--- components wrapped with it */}
      {props.children}
    </MovieContext.Provider>
  );
};
