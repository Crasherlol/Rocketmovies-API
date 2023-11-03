const { Router } = require("express");
const UsersController = require("../controllers/UserController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
const usersRoutes = Router();
const usersController = new UsersController();



usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);


module.exports = usersRoutes;