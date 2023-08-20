const express = require("express");
const userControllers = require("./../controllers/userControllers")

const fs = require("fs");


const router = express.Router();

// Routers for user
router.route("/").get(userControllers.getAllUsers).post(userControllers.createUser);
router.route("/:id").delete(userControllers.deleteUser).patch(userControllers.updateUser).get(userControllers.getSingleUser);

module.exports = router;