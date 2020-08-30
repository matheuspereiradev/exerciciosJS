const {createServer, request} = require('http')

let server = createServer((request,response)=>{
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(`<h1>Hello world</h1>
        <p>PRIMEIRO SITE EM NODE</p>
    `);
    response.end();
});

server.listen(8000);

console.log('ouvindo a porta 8000')

