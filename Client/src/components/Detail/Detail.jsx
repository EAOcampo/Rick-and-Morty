import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.container}>
      <h1>{`Probando ${id}`}</h1>
      <h2>Name: {character.name}</h2>
      <h2>Status: {character.status}</h2>
      <h2>Species: {character.species}</h2>
      <h2>Gender: {character.gender}</h2>
      <h2>Origin: {character.origin?.name}</h2>
      <img
        className={style.imagen}
        src={character.image}
        alt={character.image}
      />
    </div>
  );
};

export default Detail;
