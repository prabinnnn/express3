const router = require("express").Router();
router.get("/:name", (req, res, next) => {
  try {
    data = req.params.name;
    res.json("the is ${data}");
  } catch (e) {
    next(e);
  }
});
router.post("/:name", (req, res) => {
  data = req.params.name;
  res.json("the is ${data}");
});
router.put("/:name", (req, res) => {
  data = req.params.name;
  res.json("the is ${data}");
});
router.patch("/:name", (req, res) => {
  data = req.params.name;
  res.json("the is ${data}");
});
module.exports = router;
