const router = require("express").Router();
const user = require("../user.route");
app.use("/user", user);

module.exports = router;
