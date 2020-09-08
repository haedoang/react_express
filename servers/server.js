const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const router = require('./routes/index')

//cors 외부접속 시 주석 해제  
//const cors = require('cors');


app.use(bodyParser.json()); 
//app.use(cors());
app.use('/api', router);


app.listen(port, ()=> {
    console.log(`express is running on ${port}`)
})