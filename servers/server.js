
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;

//cors 
const cors = require('cors');


app.use(bodyParser.json()); 
app.use(cors());


app.use('/api',(req,res) => {
    res.json({username : 'haedong'})
});

app.listen(port, ()=> {
    console.log(`express is running on ${port}`)
})