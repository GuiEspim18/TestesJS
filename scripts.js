import App from "./src/app/App.js";

const body = document.querySelector("body");
const root = document.querySelector("div#root");

root.appendChild(new App().load());