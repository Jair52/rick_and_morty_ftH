const axios = require("axios")
const URL = "https://rym2.up.railway.app/api/character";
const API_key = "henrystaff";

const getCharById = (res, id) => {
    axios(`${URL}/${id}?key=${API_key}`)
        .then(response => response.data)
        .then(data => {
            //* {id, name, status, ...}
            const character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status,
                location: data.location
            };
            return res
                .writeHead(200, {'Content-Type': "application/json"})
                .end(JSON.stringify(character));
        })
        .catch(error => {
            return res
                .writeHead(500, {'Content-Type': "application/json"})
                .end(JSON.stringify({message: error.message}));
        })
}

module.exports = getCharById;