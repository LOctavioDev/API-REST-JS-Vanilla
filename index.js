// * Importamos el modulo http que ya viene integrado en Node.js y nos permite crear un servidor de tipo HTTP
import http from 'http';

// ? Definimos el hostname y el puerto
const hostname = '127.0.0.1';
const port = 3000;

// * CREATE A SERVER

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    // ? Establece el encabezado de la respuesta para indicar que el contenido es JSON
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Hola desde: JavaScript', framework: false }));
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`SERVER RUNNING AT http://${hostname}:${port}`);
});
