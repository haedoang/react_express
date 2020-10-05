const express = require('express');
const router = express.Router();
const path = require('path')


router.get('/promise', (req,res)=>{
    res.sendFile(path.join(__dirname,"promise.html"))
})

router.get('/async', (req,res)=>{
    res.sendFile(path.join(__dirname,"async.html"))
})

router.get('/orkaudio', (req,res)=>{
    res.sendFile(path.join(__dirname,"audio.html"))
})


module.exports = router;