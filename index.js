import * as http from "http";
import { readFile } from "fs/promises";
import path from "path";

const PORT = 8000;

const server = http.createServer(async (req, res) => {
    let filePath = path.join('index.html');
    let contentType = 'text/html';

    try {
        const data = await readFile(filePath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    } catch (error) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
});
