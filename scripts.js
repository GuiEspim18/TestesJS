import App from "./src/app/App.js";

const root = document.querySelector("div#root");

root.appendChild(new App().load());