import App from "./src/app/App";

const root = document.querySelector("div#root");
root.appendChild(new App().load());