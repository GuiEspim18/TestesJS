import App from "./src/app/App.js";

document.addEventListener("DOMContentLoaded", function() {
    const root = document.querySelector("div#root");

    console.log(new App().load())
    
    root.appendChild(new App().load());
});