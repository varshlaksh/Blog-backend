const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    // Format: "Bearer <token>"
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json("Token is invalid");
      req.user = user; // Attach user info to request
      next();
    });
  } else {
    return res.status(401).json("Access denied, token missing");
  }
};

module.exports = verifyToken;
