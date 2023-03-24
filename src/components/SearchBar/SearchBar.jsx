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
      <div>
        <label>🔎</label>
        <input type="search" className={style.input} onChange={handleInput} />
      </div>
      <div className={style.divButon}>
        <button className={style.buton} onClick={handleButton}>
          Agregar
        </button>
      </div>
    </div>
  );
}
