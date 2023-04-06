import React from "react";
import { useEffect, useState } from "react";
import { Movie } from "../types/movie";

function MovieList() {
  const [listOfMovies, setListOfMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchFood = async () => {
      const rsp = await fetch("https://localhost:4000/food");
      const temp = await rsp.json();
      setListOfMovies(temp);
    };
    fetchFood();
  }, []);

  // const addMovie = () => {
  //   setListOfMovies([
  //     ...Movies,
  //     {
  //       Category: "Comedy",
  //       Title: "Agen Juan",
  //       Year: 2015,
  //       Director: "Ethan Spilker",
  //       Rating: "Really Good",
  //     },
  //   ]);
  // };

  return (
    <>
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title:</th>
              <th>Year:</th>
              <th>Director:</th>
              <th>Rating:</th>
              <th>Category:</th>
              <th>Edited:</th>
            </tr>
          </thead>
          <tbody>
            {/* .sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}); */}
            {listOfMovies.map((m) => (
              <tr>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.category}</td>
                <td>{m.edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button> */}
    </>
  );
}

export default MovieList;
