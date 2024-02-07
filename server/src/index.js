// const http = require("http");
// const port = 3001;
// const characters = require("./utils/data");
// const getCharById = require("./controllers/getChartById");

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     //* /rickandmorty/character/2
//     //* ["rick...", "char...", "2"]
//     //* "2"
//     if(req.url.includes("/rickandmorty/character")){
//         const id = req.url.split("/").pop();
//         getCharById(res,id);

//         //*characters = [ {id:2}, {..}, {..}]
//         //!Clase WEB SERVER
//         // const character = characters.find( //trae como objeto
//         // //const character = characters.filter( trae como array
//         //     char => char.id === Number(id)
//         // );
//         // //console.log(character);
//         // if(character){
//         //    return res
//         //         .writeHead(200, {"Content-Type":"application/json"})
//         //         .end(JSON.stringify(character));
//         // }else{
//         //    return res
//         //         .writeHead(404, {"Content-Type":"application/json"})
//         //         .end(JSON.stringify({message: "Character Not Found"}));
//         // }
//     }else {
//         return res
//             .writeHead(404, {"Content-Type":"application/json"})
//             .end(JSON.stringify({message: "Wrong url"}));
//     }

// }).listen(port,"127.0.0.1", //listen(port,localHost);
//     () => (console.log(`Server listening on port ${port}`))
// );

//*EXPRESS
const express = require('express');
const morgan = require('morgan');
const router = require('./routes');
const server = express();
const PORT = 3001;

//*Cors
server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*'); //Autorizo recibir solicitudes de este dominio
   res.header('Access-Control-Allow-Credentials', true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
   res.header(
      'Access-Control-Allow-Headers', 
      'Origin, X-Requested-With, Content-Type, Accept'   
   ); //Autorizo recibir solicitudes con dichos hedears
   res.header(
      'Access-Control-Allow-Methods', 
      'GET, POST, OPTIONS, PUT, DELETE'
   ); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
   next();
});

//*Middlewares
server.use(express.json());
server.use(morgan("dev"));

server.use("/rickandmorty", router);

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});