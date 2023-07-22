import React from "react";
import SearchBar from "../Search/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = (props) => {
  return (
    <div className={style.contenedor}>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/favorites">
        <button>Favorites</button>
      </Link>
      <SearchBar onSearch={(characterID) => props.onSearch(characterID)} />
    </div>
  );
};

export default Nav;
