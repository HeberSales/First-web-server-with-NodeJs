const http = require('http');
const env =  require('dotenv/config');

//a função fs(filesystem) retorna um arquivo
const fs = require('fs');

//buscar no .env a porta que coloquei lá
const PORT = process.env.PORT;
const HOST = process.env.HOST;

const students = [ 
    {
        name: "Heber",
        id:"1500"
    },
    {
        name: "Marcos",
        id: "1501"
    }
];

const server = http.createServer((request, response) => { 
    fs.readFile('index.html', function(err, data) {
        response.setHeader("Content-Type", "text/html");
        response.writeHead(200);
        response.end(data);
    });
})
    

//agora precisa inicializar o server;

//Passando a porta que ele tem que escutar, o ip que ele tem que aceitar
//e se quiser passar oq o servidor tem que fazer quando iniciar coloquei em HOST no .env
//para acessar http://127.0.0.1:3000/  pois 3000 é a porta que eu escolhi
server.listen(PORT, HOST, () => {
    console.log("Servidor Iniciado :)");
})