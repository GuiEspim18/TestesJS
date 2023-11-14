import express from "express";
import { Router, Request, Response } from 'express';
import path from "path";
import * as fs from "fs";
import { Route } from "./src/utils/types/route/route.types";


export class Server {

    PORT: number;
    HTML: string = '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n</head>\n<body>\n<%- content%>\n</body>\n</html>';

    constructor(PORT = 3000) {
        this.PORT = PORT
    }

    private createView(): void {
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

    public run(routes: Array<Route>): void {
        this.createView()
        const app = express();
        app.set('views', path.join(__dirname, 'views'));
        app.set('view engine', 'ejs');
        for (const item of routes) {
            app.get(item.path, (req: Request, res: Response) => {
                const Module = item.module
                res.render("index", {
                    content: new Module().roar()
                });
            });
        }
        app.listen(this.PORT, () => {
            console.clear();
            console.log(`Server running on http://localhost:${this.PORT}`);
        });
    }
}