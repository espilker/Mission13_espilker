import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBanner from "./pages/index.js";
import Podcast from "./pages/podcast";
import MovieList from "./pages/movies";
//above is how you can import a function from a different file

function Nav() {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <a href="/">Return Home</a>
        </div>
        <div className="col-2">
          <a href="/podcast">Visit Joel's Podcast!</a>
        </div>
        <div className="col-2">
          <a href="/movies">View Joel's Movies!</a>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <div>
      <br />
      <Nav />
      <br />

      <Router>
        <Routes>
          <Route path="/" element={<TopBanner />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/movies" element={<MovieList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
