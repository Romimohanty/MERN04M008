const express = require("express");
const { createUser, getUsers, deleteUser, updateUser } = require("../controllers/userController");
const validation=require("../middleware/ValidationMiddleWare")
const AuthMiddleWare=require("../middleware/AuthMiddleWare")

const router = express.Router();

router.get("/", validation,AuthMiddleWare,getUsers)


router.get("/:id", getUserById)
router.post("/",createUser)

router.delete("/:id", deleteUser)

router.put("/:id", updateUser)

module.exports = router