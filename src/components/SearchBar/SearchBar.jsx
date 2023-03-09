import style from "../SearchBar/searchBar.module.css";

export default function SearchBar(props) {
  return (
    <div className={style.div}>
      <input type="search" className={style.input} />
      <button className={style.buton} onClick={props.onSearch}>
        Agregar
      </button>
    </div>
  );
}
