

const http = require('http')
const server = http.createServer((req, res) => {
}).listen(8080)

server.on('connection', () => {
    server.emit('myEvent', Date.now())
})

server.on('myEvent', (date) => {
    console.log(`my own event done ${date}`)
})






