const router = require("express").Router();
const churchesRoutes = require("./churches");

// Book routes
router.use("/churches", churchesRoutes);

module.exports = router;
