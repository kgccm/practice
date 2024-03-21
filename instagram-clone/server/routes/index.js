var express = require('express');
var router = express.Router();
const usersRouter = require("./users");
const auth = require("../auth/auth");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ message: "hello client"});
});

// 유저라우터
router.use("/users", usersRouter);

module.exports = router;
