import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Character from "./components/Character/Character";
import Pagination from "./components/Pagination/Pagination";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const API_URL = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (API_URL) => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((err) => console.log(err));
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(API_URL);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <Character character={characters} />
        <Pagination
          prev={info.prev}
          onPrevious={onPrevious}
          next={info.next}
          onNext={onNext}
        />
      </div>
    </div>
  );
};

export default App;
