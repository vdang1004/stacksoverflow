const router = require("express").Router();
const loginsController = require("../../controllers/loginsController");

// Matches with "/api/logins"
router.route("/")
  .get(loginsController.findAll)
  .post(loginsController.create);

// Matches with "/api/logins/:id"
router
  .route("/:id")
  .get(loginsController.findById)
  .put(loginsController.update)
  .delete(loginsController.remove);

module.exports = router;
