const router = require("express").Router();
const todoRoutes = require("./todos.js");

// Book routes
router.use("/todos", todoRoutes);

module.exports = router;
