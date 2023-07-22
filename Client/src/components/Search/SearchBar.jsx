import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  const { onSearch } = props;
  const [character, setCharacter] = useState("");
  const handleInputChange = (event) => {
    const { value } = event.target;
    setCharacter(value);
  };
  return (
    <div className={style.contenedor}>
      <input placeholder="id..." type="search" onChange={handleInputChange} />
      <button className={style.btn} onClick={() => onSearch(character)}>
        Agregar
      </button>
    </div>
  );
}
