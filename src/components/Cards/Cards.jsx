import Card from "../Card/Card";

export default function Cards(props) {
  const { characters } = props;

  return (
    <div>
      {characters.map(({ name, species, gender, image }) => {
        return (
          <Card name={name} species={species} gender={gender} image={image} />
        );
      })}
    </div>
  );
}
