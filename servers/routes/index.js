const express = require('express');
const router = express.Router();


router.get('/', (req,res) => res.json({username: 'haedoang'}));
router.get('/group', (req,res) => res.json({username: 'dev group. haedong'}));


module.exports = router;