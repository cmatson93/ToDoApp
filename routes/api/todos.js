const router = require("express").Router();
const toDosController = require("../../controllers/toDosController");
const axios = require("axios");


// Matches with "/api/todos"
router.route("/")
    .get(toDosController.findAll)
    .post(toDosController.create);

// Matches with "/api/todos/:id"
router
    .route("/:id")
    .get(toDosController.findById)
    .put(toDosController.update)
    .delete(toDosController.remove);

module.exports = router;