const express = require("express");
const authMiddleware = require("../../middlewares/auth.middleware");
const UserController = require("./user.controller");

const router = express.Router();

router.get("/me", authMiddleware, UserController.me);

module.exports = router;
