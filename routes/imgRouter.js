const imgHandler = require('../handlers/img.js');
const express = require('express');
const router = express.Router();

router.get('/znjzkimg', (req, res)=>{ res.render('znjzkimg.html');});

module.exports = router;