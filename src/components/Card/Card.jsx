import style from "../Card/card.module.css";

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
        <h2>Name: {props.name}</h2>
        <h2>Species: {props.species}</h2>
        <h2>Gender: {props.gender}</h2>
      </div>
    </div>
  );
}
