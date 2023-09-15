const express = require("express");
const router = express.Router();

router.get(
  "/tafsir/:tafsir_id/:text",
  require("../Controller/tafsirController")
);

module.exports = router;
