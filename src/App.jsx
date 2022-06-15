import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Character from "./components/Character/Character";

const App = () => {
  const [characters, setCharacters] = useState([]);

  const API_URL = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (API_URL) => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setCharacters(data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCharacters(API_URL);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <Character character={characters} />
      </div>
    </div>
  );
};

export default App;
