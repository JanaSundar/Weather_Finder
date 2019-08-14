const express = require('express');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');

const port = process.env.PORT || 4000;

require('dotenv').config();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.redirect("/Weather/")
})

app.get("/Weather/:location",(req,res)=>{
    const location = req.params.location;

    fetch(`https://weather.api.here.com/weather/1.0/report.json?app_id=${process.env.ID}&app_code=${process.env.CODE}&product=forecast_7days_simple&name=${location}`)
.then(res=>res.json())
.then(data=>res.json(data));


})






app.listen(port,()=>{
    console.log('server started');
})

