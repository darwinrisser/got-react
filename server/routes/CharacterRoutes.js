const express = require("express");
const router = express.Router();
const {list,show} = require("../controllers/CharacterController");

router.get("/characters", list);
router.get("/characters/:id", show);

module.exports =  router;