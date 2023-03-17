import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);

  return (
    <div>
      <h2>Favoritos:</h2>
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
      <Link to={"/home"}>Home</Link>
    </div>
  );
};

export default Favorites;
