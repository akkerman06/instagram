const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const SocketServer = require('./socketServer')
const { ExpressPeerServer  } = require('peer')
const path = require('path')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use(cookieParser())

// Socket
const http = require('http').createServer(app)
const io = require('socket.io')(http)

io.on('connection', socket => {
    SocketServer(socket)
})
ExpressPeerServer(http, { path: '/' })

app.use('/api', require('./routes/authRouter'))


const port = process.env.PORT || 5000

const URI = process.env.MONGODB_URL
mongoose.connect(URI, {

})
.then(() => {
    console.log('Соединение с MongoDB успешно установлено');
})
.catch((err) => {
    console.error('Ошибка при подключении к MongoDB:', err);
});

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

http.listen(port, () => {
    console.log('Server is running on port', port)
})