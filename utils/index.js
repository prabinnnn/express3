const express = require("express");
const app = express();
const indexofrouter = require("../route");
app.use(app.body);
app.use("/", indexofrouter);
app.use((err, next, req, res) => {});
app.get(7000, () => {
  console.log("app is runing");
});
module.exports = indexofrouter.router;
