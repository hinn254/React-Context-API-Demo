import React from "react";

const Movie = ({ name, price }) => {
  //   const name = props.name;
  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

export default Movie;
