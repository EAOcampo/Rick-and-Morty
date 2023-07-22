import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  removeFav,
  addFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    //Remove the current favorite from de global estate
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, species, image, gender, onClose });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.container} key={id}>
      <div className={style.containerBtn}>
        <button className={style.btn} onClick={onClose}>
          X
        </button>
      </div>
      <div className={style.medio}>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
        <Link to={`/detail/${id}`}>
          <h2 className={style.name}>{name}</h2>
        </Link>
        <h2 className={style.status}>
          {status} - {species}
        </h2>
        {/* <h2>{species}</h2> */}
        <h2 className={style.subtittle}>Genero</h2>
        <h2 className={style.gender}>{gender}</h2>
        <h2 className={style.subtittle}>Origin</h2>
        <h2 className={style.origin}>{origin}</h2>
      </div>
      <div className={style.image}>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
