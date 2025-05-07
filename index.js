require('dotenv').config()
const http = require('http')

function requestController(req, res) {
    console.log('Bienvenido al curso');
    
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bienvenido al curso');
}

const server = http.createServer(requestController)

const PORT = process.env.PORT || 3000

server.listen(PORT, function () {
    console.log("Aplicación corriendo en: " + PORT)
})
