const db = require("../config/db");

const roleMiddleware = (expectedRole) => {
  return async (req, res, next) => {
    if (!req.user || !req.user.id)
      return res.status(401).json({ message: "Unauthorized" });

    const rows = await db.query(
      `
      SELECT r.name FROM users u
      JOIN roles r ON u.role_id = r.id
      WHERE u.id = ?
    `,
      [req.user.id]
    );

    const userRole = rows[0]?.name;

    if (userRole !== expectedRole) {
      return res
        .status(403)
        .json({ message: "Forbidden: requires " + expectedRole });
    }

    next();
  };
};

module.exports = roleMiddleware;
