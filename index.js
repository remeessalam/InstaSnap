const http = require('http');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const server = http.createServer(app);
require('dotenv').config()
const path = require('path')
app.use(express.static('public'));

//connection to mongoose server
mongoose.connect(process.env.MONGOURL)
    .then(() => {
        console.log('mongoose is connected');
    })
    .catch((err) => {
        console.log(process.env.MONGOURL)
        console.log(`find an a error ${err}`)
    })
    
    app.get('/', (req, res) => {
        res.send('<h1 style="color:red;">hello world</h1>');    
    })
    
    
    
    // server listening on port
    const PORT = process.env.PORT || 3000
    server.listen(PORT, () => {
        console.log(`server listening on port ${PORT}`)
    })
    
    
    
    
    
    
// app.use(express.static(__dirname + '/public'));
// process.env.MONGOURL
//  const uri = "mongodb+srv://remeessalam:surumiremees1@cluster0.6ncimah.mongodb.net/newInstaChat?retryWrites=true&w=majority"