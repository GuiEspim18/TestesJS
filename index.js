import * as http from "http";
import { readFile } from "fs/promises";
import { extname } from "path";

const PORT = 8000;

const server = http.createServer(async (req, res) => {
    let filePath = req.url === '/' ? 'index.html' : `.${req.url}`;
    let ext = extname(filePath);
    let contentType = 'text/html';

    // Determina o tipo MIME baseado na extensão do arquivo
    switch (ext) {
        case '.js':
            contentType = 'application/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.html':
            contentType = 'text/html';
            break;
    }

    try {
        const data = await readFile(filePath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data, 'utf-8');
    } catch (error) {
        console.log(error);
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
});
