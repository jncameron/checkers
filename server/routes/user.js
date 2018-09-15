const express = require("express");
const router = express.Router();

const UserController = require('../controllers/user');
const checkAuth = require('../middleware/check-auth');

router.post("/signup", UserController.user_signup);

router.post("/login", UserController.user_login);

router.post("/refreshlogin", UserController.user_refresh_login);

router.post("/update", UserController.user_update);

router.post("/updateav", UserController.user_updateav);

router.get("/userstats", UserController.user_stats);

router.delete("/:userId", checkAuth, UserController.user_delete);

module.exports = router;