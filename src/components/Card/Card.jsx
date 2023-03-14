import style from "../Card/card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className={style.card}>
      <div className={style.contButt}>
        <img src={props.image} alt={props.name} />
        <button onClick={props.onClose} className={style.button}>
          X
        </button>
      </div>
      <div className={style.text}>
        <Link to={`/detail/${props.id}`}>
          <h2>Name: {props.name}</h2>
        </Link>
        <h2>Species: {props.species}</h2>
        <h2>Gender: {props.gender}</h2>
      </div>
    </div>
  );
}
