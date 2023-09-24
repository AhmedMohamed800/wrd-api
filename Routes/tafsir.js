const express = require("express");
const router = express.Router();

router.get(
  "/tafsir/:tafsir_id/:text",
  require("../Controller/tafsirController")
);

router.get(
  "/tafsirWithName/:tafsir_id/:aya_number/:sura_name",
  require("../Controller/tafsirNameController")
);

module.exports = router;
