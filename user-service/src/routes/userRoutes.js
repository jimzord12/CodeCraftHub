const express = require("express");
const { registerUser, loginUser, getUser } = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:username", getUser);
// Add more routes for getting user, updating user, etc.

module.exports = router;
