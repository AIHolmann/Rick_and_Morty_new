import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";

function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const username = "alejoholmann@mail.com";
  const password = "qwerty123";

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

  const login = (userdata) => {
    if (userdata.username === username && userdata.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      window.alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
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

------> Controlar que no se puedan agregar personajes repetidos.

Generar un botón en la navbar que agregue un personaje random (Hint: hay 826 personajes en total).

Ahora te desafiamos a que crees un nuevo componente llamado **Error**. A este componente le podrás dar los estilos que quieras, pero la idea es que se muestre un mensaje de error 404.
El desafío es el siguiente: haz que este componente se muestre cada vez que el usuario ingrese a cualquier otra ruta que no exista. Es decir que no la hayas especificado en esta homework. Por ejemplo, si creaste una ruta "`/home`" y "`/about`", y el usuario en el navegador escribe y "`/henry`", debería mostrar el error 404.

Si se vuelve a cargar el form access debe ser false. Logout button. Arreglar validaciones.


*/
