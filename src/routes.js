const express = require("express");
const router = express.Router();
const authMiddleware = require("./middlewares/auth");

const userController = require("./controllers/userController");

router.get("/hello", (req, res) => {
  return res.json("hello!");
});

/// USER ROUTES ///

//POST register a new user
router.post("/api/user_register", userController.user_register);

//POST authenticate user
router.post("/api/user_auth", userController.user_auth);

/// ROUTES WITH AUTHENTICATION ONLY ///

//GET user info authentication
router.get("/api/user_info", authMiddleware, userController.user_info);

module.exports = router;
