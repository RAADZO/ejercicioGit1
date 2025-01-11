const http = require("http");
const port = 3000;
http.createServer((req, res) => {
 res.write("Hola Mundo desde el servidor!");
 res.end();
})
.listen(port, ()=> {
 console.log(`Servidor escuchando en http://localhost:${port}`)
})