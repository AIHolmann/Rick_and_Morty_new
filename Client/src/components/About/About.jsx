import style from "./about.module.css";

const About = () => {
  return (
    <div className={style.todo}>
      <div className={style.all}>
        <h1 className={style.saludo}>Hola!</h1>
        <h2 className={style.nombre}>Soy Alejo Holmann</h2>
        <h3 className={style.texto}>
          Y éste es mi primer proyecto <i>Front-End</i> con <i>React</i>
        </h3>
      </div>
      <div className={style.container}>
        <div className={style.logo}></div>
        <div className={style.bottom}></div>
      </div>
    </div>
  );
};

export default About;
