const express = require("express");
const router = express.Router();
const authMiddleware = require("./middlewares/auth");

const userController = require("./controllers/userController");
const toolsController = require("./controllers/toolsController");

router.get("/api/tools", toolsController.tools_list);
router.post("/api/tools", toolsController.tools_create);
router.delete("/api/tools/:id", toolsController.tools_delete);

router.post("/api/user_register", userController.user_register);
router.post("/api/user_auth", userController.user_auth);

//Route with user authentication
router.get("/api/user_info", authMiddleware, userController.user_info);

module.exports = router;
