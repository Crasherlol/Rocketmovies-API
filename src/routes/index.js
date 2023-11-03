const {Router} = require("express")

const routes = Router();
const notesRouter = require("./notes.routes")
const usersRouter = require("./users.routes")
const tagsRouter = require("./tags.routes")

routes.use("/users", usersRouter);
routes.use("/movie_notes", notesRouter);
routes.use("/movie_tags", tagsRouter);

module.exports = routes;