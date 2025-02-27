import * as http from "http";
import { readFile } from "fs/promises";
import { extname } from "path";
import { existsSync } from "fs";
import { routes } from "./src/app/Routes.js";
import { log } from "console";

const PORT = 8000;

const server = http.createServer(async (req, res) => {
    const ext = extname(req.url);
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

    let filePath;

    // Se a URL é para um recurso estático, tentamos servir esse arquivo
    if (ext) {
        filePath = `.${req.url}`;
        if (!existsSync(filePath)) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found</h1>');
            return;
        }
    } else {
        // Verifica se a URL é uma rota válida
        const isValidRoute = routes.map(route => {
            const urlSegments = req.url.split('/').filter(Boolean);
            const routeSegments = route.path.split('/').filter(Boolean);
            if (routeSegments.length !== urlSegments.length) {
                return false;
            }

            if (urlSegments[0] == routeSegments[0]) {
                if (route.children && urlSegments.length > 1) {
                    // return route.children.filter(child => child.path == "/" + urlSegments[1]).length > 0;
                    // children
                } else {

                }
            }

            return routeSegments.every((segment, index) => {
                return segment.startsWith(':') || segment === urlSegments[index];
            });
        });

        // Se é uma rota válida ou a raiz, servimos index.html
        if (isValidRoute || req.url === "/") {
            filePath = 'index.html';
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found</h1>');
            return;
        }
    }

    try {
        const data = await readFile(filePath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data, 'utf-8');
    } catch (error) {
        console.log(error);
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h1>500 Internal Server Error</h1>');
    }
});

server.listen(PORT, () => {
    console.clear();
    const link = `http://localhost:${PORT}/`;
    console.log(`✅ Servidor rodando em ${link}`);
});