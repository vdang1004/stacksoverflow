const router = require("express").Router();
const articleRoutes = require("./articles");
const fetchRoutes = require("./fetch");
const headlineRoutes = require("./headlines");
const loginRoutes = require("./logins");

// Article routes
router.use("/articles", articleRoutes);
router.use("/fetch", fetchRoutes);
router.use("/headlines", headlineRoutes);
router.use("/logins", loginRoutes)

module.exports = router;
