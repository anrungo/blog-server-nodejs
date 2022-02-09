/* const http = require("http")

const hostname = "localhost"
const port = 3333


const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/plain")
    res.end("Hello World")
})

server.listen(port, hostname, ()=>{
    console.log("SERVIDOR RODANDO");
})
 */

// Vamos usar o express para criar o servidor
// npm i express

const express = require("express")
const path = require("path")

const app = express()
const router = express.Router()

router.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname + "/pages/home.html"))
})

router.get("/contacto", (req, res)=> {
    res.sendFile(path.join(__dirname + "/pages/contacto.html"))
})

//console.log(); // O __dirname recupera o endereco actual

app.use(router)

app.listen(3333, () =>{
    console.log("Servidor rodando...");
})














