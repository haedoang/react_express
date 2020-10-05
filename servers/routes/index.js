const express = require('express');
const router = express.Router();
const javascript = require('./javascript/index');


router.get('/', (req,res) => res.json({username: 'haedoang'}));
router.get('/group', (req,res) => res.json({username: 'dev group. haedong'}));


router.use('/js', javascript)


module.exports = router;