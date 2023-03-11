import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import { useState } from "react";
import Nav from "./components/Nav/Nav";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <Nav onSearch={onSearch} />

      <div>
        <Cards characters={characters} onClose={onClose} />
      </div>
    </div>
  );
}

export default App;

/*
Extras a hacer!

Controlar que no se puedan agregar personajes repetidos.
Generar un botón en la navbar que agregue un personaje random (Hint: hay 826 personajes en total).

*/
