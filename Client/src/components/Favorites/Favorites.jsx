import { connect } from "react-redux";
import Card from "../Card/Card";

const Favorites = ({ myFavorites }) => {
  console.log(myFavorites);
  return (
    <div>
      {myFavorites?.map(({ id, name, species, image, gender }) => {
        return (
          <Card
            id={id}
            name={name}
            species={species}
            image={image}
            gender={gender}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);

/* import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { removeFav } from "../../redux/actions";

const Favorites = () => {
  const dispath = useDispatch();

  const myFavorites = useSelector((state) => state.myFavorites);

  const onClose = (id) => {
    dispath(removeFav(id));
  };

  return (
    <div>
      {myFavorites.map(
        ({ id, name, status, species, gender, origin, image }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin.name}
              image={image}
              onClose={onClose}
            />
          );
        }
      )}
    </div>
  );
};

export default Favorites; */
