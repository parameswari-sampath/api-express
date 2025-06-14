const UserModel = require("./user.model");
const RoleModel = require("../roles/role.model");

const UserService = {
  getProfile: async (id) => {
    const user = await UserModel.findById(id);
    if (!user) return null;

    const role = await RoleModel.findById(user.role_id);
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: role?.name || null,
    };
  },
};

module.exports = UserService;
