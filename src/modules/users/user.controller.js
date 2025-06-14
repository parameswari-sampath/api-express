const UserService = require("./user.service");

const UserController = {
  me: async (req, res) => {
    const user = await UserService.getProfile(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  },
};

module.exports = UserController;
