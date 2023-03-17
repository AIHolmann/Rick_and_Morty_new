import style from "../SearchBar/searchBar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar(props) {
  const [character, setCharacter] = useState("");
  const handleInput = (e) => {
    setCharacter(e.target.value);
  };

  const handleButton = () => {
    props.onSearch(character);
  };

  return (
    <div className={style.div}>
      <div className={style.buton}>
        <Link to={"/home"} className={style.ln}>
          Home
        </Link>
      </div>
      <div className={style.buton}>
        <Link to={"/about"} className={style.ln}>
          About
        </Link>
      </div>
      <div className={style.buton}>
        <Link to={"/favorites"} className={style.ln}>
          Favorites
        </Link>
      </div>
      <div>
        <label>🔎</label>
        <input type="search" className={style.input} onChange={handleInput} />
      </div>
      <button className={style.buton} onClick={handleButton}>
        Agregar
      </button>
    </div>
  );
}
