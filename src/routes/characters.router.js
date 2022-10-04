const express = require("express");
const router = express.Router();

router.get('/characters', (req, res) => {
  Response.send("hello work")
})


module.exports = router;
