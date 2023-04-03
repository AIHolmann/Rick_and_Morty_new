import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import style from "./favorites.module.css";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);

  return (
    <div className={style.container}>
      <div>
        <h2 className={style.tittle}>Favorites:</h2>
      </div>
      <div>
        {favorites.map(({ name, species, gender, image, id }) => {
          return (
            <Card
              name={name}
              species={species}
              gender={gender}
              image={image}
              key={id}
              id={id}
              // onClose={() => onClose(id)}
            />
          );
        })}
      </div>
      <div className={style.contLink}>
        <Link to={"/home"} className={style.link}>
          Home
        </Link>
      </div>
    </div>
  );
};

export default Favorites;
