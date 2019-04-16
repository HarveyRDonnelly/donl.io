
//
// Harvey Donnelly 2018
// http://www.donl.io/
//

var express = require('express');
var router = express.Router();

const fs = require('fs');

let rawdata = fs.readFileSync('info.json');
let info = JSON.parse(rawdata);

router.get('/', function(req, res, next) {
	res.render('index', info);
});

module.exports = router;
