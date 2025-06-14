const db = require("../../config/db");

const UserModel = {
  findByEmail: async (email) => {
    const rows = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    return rows[0] || null;
  },

  findById: async (id) => {
    const rows = await db.query(
      "SELECT id, name, email, role_id FROM users WHERE id = ?",
      [id]
    );
    return rows[0] || null;
  },
};

module.exports = UserModel;
