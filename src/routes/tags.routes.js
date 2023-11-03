const { Router } = require("express");
const ensureAuthenticated = require ("../middlewares/ensureAuthenticated");
const MovieTagsController = require("../controllers/MovieTagsController")

const tagsRoutes = Router();
const movieTagsController = new MovieTagsController();

tagsRoutes.get("/", ensureAuthenticated, movieTagsController.index);


module.exports = tagsRoutes;