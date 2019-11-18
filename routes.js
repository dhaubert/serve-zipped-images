const express = require("express");
const router = express.Router();

const downloadController  = require("./controllers/http/downloadController");

router.get("/", async (req, res) => {
  res.json({
    message:
      "Refer to /mission/images to get the zip file with all the mission images.",
    error: 0
  });
});

router.get("/mission/images", (req, res) => {
    const download = new downloadController();
    download.index(req, res);
});

module.exports = router;
