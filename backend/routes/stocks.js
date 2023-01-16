var express = require("express");
var router = express.Router();

const { getcompanydata } = require("../controllers/stocks");

router.get(
  "/getCompanyData",
  getcompanydata
);

module.exports = router;
