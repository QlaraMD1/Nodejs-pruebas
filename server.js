/*const os = require('os');

console.log(os.platform());
console.log(os.release());
console.log(os.freemem());
console.log(os.hostname());
console.log(os.cpus());*/

const fs = require('fs');
/*fs.writeFile('./texto.txt','Linea uno',function(err){

    if (err){
        console.log(err);
    }
    console.log('archivo creado');
})

console.log('ultima linea de codigo');*/

/*fs.readFile('./texto.txt', function(err,data){

    if (err){
        console.log(err);
    }
    console.log(data.toString());
})*/

const http = require('http');
const handlerServer = function (req,res){
    res.writeHead(200,{'Content-type': 'text/html'})//tipo de respuesta asi como el tipod e formato
    res.write('<h1>hola mundo de js desde node :-)</h1>');
    res.end();
}
//peticion y respuesta
const server = http.createServer(handlerServer);

server.listen(3000, function(err){
    if (err){
        console.log(err);
    }
    console.log('Servidor escuchando desde el puerto 3000'.green);

})

const colors = require('colors');