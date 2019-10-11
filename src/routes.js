const express = require("express");
const router = express.Router();
const authMiddleware = require("./middlewares/auth");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const userController = require("./controllers/userController");
const toolsController = require("./controllers/toolsController");

router.get("/api", (req, res) => {
  res.json({ api: "VUTTR API - Very Useful Tools to Remember" });
});

router.use("/api/api-docs", swaggerUi.serve);
router.get("/api/api-docs", swaggerUi.setup(swaggerDocument));

router.get("/api/tools", toolsController.tools_list);
router.post("/api/tools", toolsController.tools_create);
router.delete("/api/tools/:id", toolsController.tools_delete);

router.post("/api/user_register", userController.user_register);
router.post("/api/user_auth", userController.user_auth);

//Route with user authentication
router.get("/api/user_info", authMiddleware, userController.user_info);

module.exports = router;
