const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

function getCharById(req, res) {
  const { id } = req.params;
  axios(URL + id)
    .then(({ data }) => {
      const character = {
        id: Number(data.id),
        status: data.status,
        name: data.name,
        species: data.species,
        origin: data.origin,
        image: data.image,
        gender: data.gender,
      };
      // res.writeHead(200, { "Content-type": "application/json" });
      return res.end(JSON.stringify(character));
    })
    .catch((error) => {
      if (error.message.includes("404")) {
        // res.writeHead(500, { "Content-type": "text/plain" });
        return res.end(error.message);
      }
    });
}
module.exports = {
  getCharById,
};

// TODO : ANTERIOR A EXPRESS
/* const axios = require("axios");

const API_URL = "https://rickandmortyapi.com/api/character/";

function getCharById(res, id) {
  axios(API_URL + id)
    .then((response) => {
      const { data } = response;
      const character = {
        id: Number(id),
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin,
        image: data.image,
        status: data.status,
      };
      res.writeHead(200, { "Content-type": "application/json" });
      return res.end(JSON.stringify(character));
    })
    .catch((error) => {
      if (error.message.includes("404")) {
        res.writeHead(500, { "Content-type": "text/plain" });
        return res.end(error.message);
      }
    });
}
module.exports = {
  getCharById,
};
 */
