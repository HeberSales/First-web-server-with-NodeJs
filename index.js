const http = require('http');
const env =  require('dotenv/config');

//buscar no .env a porta que coloquei lá
const PORT = process.env.PORT;
const HOST = process.env.HOST;


//definindo como vai ser criado o servidor;
const server = http.createServer((request, response) => {
    console.log(request.url);   
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Olá mundo!');
})

//agora precisa inicializar o server;

//Passando a porta que ele tem que escutar, o ip que ele tem que aceitar
//e se quiser passar oq o servidor tem que fazer quando iniciar coloquei em HOST no .env
//para acessar http://127.0.0.1:3000/  pois 3000 é a porta que eu escolhi
server.listen(PORT, HOST , () => {
    console.log("Servidor Iniciado :)");
})