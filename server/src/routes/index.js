const router = require("express").Router();

const getCharById = require("../controllers/getChartById");
const login = require("../controllers/login");
const { postFav, deleteFav } = require("../controllers/handleFavorites");

//*Configurar las rutas (url)
router.get("/character/:id",getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;