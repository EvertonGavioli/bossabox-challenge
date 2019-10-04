const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      error: "Token not informed. LogIn to the application to get a token."
    });
  }

  const [scheme, token] = authHeader.split(" ");

  try {
    const decode = jwt.verify(token, "secret");

    req.userId = decode.id;

    return next();
  } catch (error) {
    return res.status(401).json({
      error: "Authentication Token Invalid"
    });
  }
};
