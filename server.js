require('dotenv').config();
const cors = require('cors');
const socketIO = require('socket.io');
const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter');
const mongoose = require('mongoose');

const corsOptions = {
  origin: process.env.ORIGIN,
  credentials: true,
  exposedHeaders: 'authorization-token',
};

mongoose.connect(process.env.MONGO_URI, 
  {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('connected to database');
  });

app.use(cors(corsOptions));

app.use('/api/auth', express.json() ,userRouter);

const server = app.listen(process.env.PORT, () => {
  console.log('server is running on port ', process.env.PORT);
  console.log('origin: ', process.env.ORIGIN)
});


// SOCKET.IO LOGIC

const io = socketIO(server, {
  cors: {
    origin: process.env.ORIGIN,
    methods: ['GET', 'POST']
  }
});

const messages = [];

io.on('connection', (socket) => {
  socket.emit('initial_messages', messages)

  socket.on('new_message', (data) => {
    messages.push({username: data.username, message: data.message});
    io.emit('update_messages', {username: data.username, message: data.message});
  });

});

module.exports = server;
