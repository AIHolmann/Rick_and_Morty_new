import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import { useState } from "react";
import Nav from "./components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const API_KEY = "90cc495ecaad.7dff8a6963967723f2f6";

    if (characters.find((char) => char.id === character)) {
      return alert("Personaje repetido");
    }

    fetch(`${URL_BASE}/character/${character}?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("Algo salio mal");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

/*
Extras a hacer!

Controlar que no se puedan agregar personajes repetidos.

Generar un botón en la navbar que agregue un personaje random (Hint: hay 826 personajes en total).

Ahora te desafiamos a que crees un nuevo componente llamado **Error**. A este componente le podrás dar los estilos que quieras, pero la idea es que se muestre un mensaje de error 404.
El desafío es el siguiente: haz que este componente se muestre cada vez que el usuario ingrese a cualquier otra ruta que no exista. Es decir que no la hayas especificado en esta homework. Por ejemplo, si creaste una ruta "`/home`" y "`/about`", y el usuario en el navegador escribe y "`/henry`", debería mostrar el error 404.



*/
