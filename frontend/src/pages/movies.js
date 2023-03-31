import React from "react";
import data from "../MovieData.json";
import { useState } from "react";

const Movies = data.MovieData;

function MovieList() {
  const [listOfMovies, setListOfMovies] = useState(Movies);

  const addMovie = () => {
    setListOfMovies([
      ...Movies,
      {
        Category: "Comedy",
        Title: "Agen Juan",
        Year: 2015,
        Director: "Ethan Spilker",
        Rating: "Really Good",
      },
    ]);
  };

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
            {listOfMovies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button>
    </>
  );
}

export default MovieList;
