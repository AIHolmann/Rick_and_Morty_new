import { useState } from "react";
import style from "./form.module.css";
import validation from "./validation";

const Form = ({ login }) => {
  const [userdata, setUserdata] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUserdata({
      ...userdata,
      [e.target.name]: e.target.value,
    });

    validation(
      {
        ...userdata,
        [e.target.name]: e.target.value,
      },
      errors,
      setErrors
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    login(userdata);
  };

  return (
    <div className={style.div}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          placeholder="Username..."
          value={userdata.username}
          onChange={handleInputChange}
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
        <br />

        <label htmlFor="password">Password: </label>
        <input
          type="text"
          name="password"
          placeholder="Password..."
          value={userdata.pass}
          onChange={handleInputChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
export default Form;
