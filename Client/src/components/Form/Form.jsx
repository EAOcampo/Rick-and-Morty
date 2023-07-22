import { useEffect, useState } from "react";
import style from "./Form.module.css";
import validation from "./validation";

const Form = (props) => {
  const { login } = props;
  // Estado local data
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    setErrors(validation({ ...userData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <img
          src="https://media.vandalsports.com/i/1706x960/5-2022/202251816546_1.jpg.webp"
          alt="Imagen"
        />
        <div>
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Escribe tu email..."
            value={userData.email}
            onChange={handleChange}
          />
          {errors.e2 ? (
            <p>{errors.e2}</p>
          ) : errors.e1 ? (
            <p>{errors.e1}</p>
          ) : (
            <p>{errors.e3}</p>
          )}
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Escibe tu contraseña..."
            value={userData.password}
            onChange={handleChange}
          />
          {errors.p1 ? <p>{errors.p1}</p> : <p>{errors.p2}</p>}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
