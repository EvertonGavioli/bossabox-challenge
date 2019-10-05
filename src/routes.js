const express = require("express");
const router = express.Router();
const authMiddleware = require("./middlewares/auth");

const userController = require("./controllers/userController");
const toolsController = require("./controllers/toolsController");

//#region TOOLS ROUTES

//GET - list all registered tools OR filter tools by tags
router.get("/api/tools", toolsController.tools_list);

//POST - Create a new Tool
router.post("/api/tools", toolsController.tools_create);

//DELETE - Delete a tool by id
router.delete("/api/tools/:id", toolsController.tools_delete);

//#endregion

//#region USER ROUTES

//POST - register a new user
router.post("/api/user_register", userController.user_register);

//POST - authenticate user
router.post("/api/user_auth", userController.user_auth);

//#endregion

//#region ROUTES WITH AUTHENTICATION ONLY

//GET - user info authentication
router.get("/api/user_info", authMiddleware, userController.user_info);

//#endregion

module.exports = router;
