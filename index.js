import * as http from "http";
import { readFile } from "fs/promises";
import { extname, join } from "path";
import { existsSync } from "fs";
import { routes } from "./src/app/Routes.js";

const PORT = 8000;

const server = http.createServer(async (req, res) => {

    const paths = new Array();

    for (let item of routes) {
        paths.push(item.path);
    }
    
    let filePath = req.url === "/" ? 'index.html' : `.${req.url}`;
    let ext = extname(filePath);
    let contentType = 'text/html';

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
        // console.log(req.url);
        if (!req.url.includes(".js")) {
            let valid = false;
            for (let item of paths) {
                let path = item;
                if (path.includes("/:")) {
                    const index = path.indexOf("/:");
                    path = path.indexOf(0, index);
                }
                if (req.url.includes(path)) {
                    valid = true;
                    break;
                }
            }
            if (!valid) {
                throw new Error();
            }
        }
        
        if (!existsSync(filePath) && ext !== '.html') {
            console.log(req.url);
            filePath = 'index.html';
        }
        
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
    console.clear();
    console.log(`✅ Servidor rodando em http://localhost:${PORT}/`);
});