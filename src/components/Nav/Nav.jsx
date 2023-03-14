import SearchBar from "../SearchBar/SearchBar";
import style from "./nav.module.css";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <div className={style.nav}>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
