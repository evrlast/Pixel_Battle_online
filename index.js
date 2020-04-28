const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./config/db');
const http = require('http');
const io = require('socket.io');
const fs = require('fs');

const app = express();
const server = http.createServer();

const port = 3000;

server.listen(port);
io.listen(server);

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(config.db, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', () => {
    console.log("Успешное подключение к БД");
});

mongoose.connection.on('error', (err) => {
    console.log(err);
});

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    fs.createReadStream(path.join(__dirname + '/pixell-battle-front/src/index.html').pipe(res);
})

io.sockets.on('connection', (socket){
   socket.emit('news', {hello: 'world'});
   socket.on('my other event', (data) => {
       console.log(data);
   })
});

// app.post('/', (req, res) => {
//     let arr = new colArray({
//         array: req.body.array
//     });
//
//     colArray.changeArray(arr, (err, array) => {
//         if(err){
//             res.json({success: false, msg: "Error"})
//         }
//     })
//
// });

app.listen(port, () => {
    console.log('hello world');
});
