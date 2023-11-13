import express from "express";
import { Router, Request, Response } from 'express';
import path from "path";
import * as fs from "fs";


class Server {

    PORT: number;
    HTML: string = '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n</head>\n<body>\n\n</body>\n</html>';

    constructor(PORT = 3000) {
        this.PORT = PORT
    }

    createView() {
        const dist = fs.existsSync("./dist/");
        if (!dist) {
            fs.mkdirSync("/dist")
            const views = fs.existsSync("./dist/views");
            if (!views) {
                fs.mkdirSync("./dist/views");
                const ejs = fs.existsSync("./dist/views/index.ejs");
                fs.writeFileSync("./dist/views/index.ejs", this.HTML);
            }
        } else {
            const views = fs.existsSync("./dist/views");
            if (!views) {
                fs.mkdirSync("./dist/views");
                const ejs = fs.existsSync("./dist/views/index.ejs");
                fs.writeFileSync("./dist/views/index.ejs", this.HTML);
            }
        }
    }

    run() {
        this.createView()
        const app = express();
        app.set('views', path.join(__dirname, 'views'));
        app.set('view engine', 'ejs');
        app.get("/", (req: Request, res: Response) => {
            res.render("index")
        });
        app.listen(this.PORT, () => {
            console.clear()
            console.log(`Server running on http://localhost:${this.PORT}`)
        });
    }
}

new Server().run()