require('dotenv').config()
const http = require('http')

function requestController() {
    console.log('Bienvenido al curso')
}

const server = http.createServer(requestController)

const PORT = process.env.PORT || 3000

server.listen(PORT, function () {
    console.log("Aplicación corriendo en: " + PORT)
})
