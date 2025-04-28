import App from "./src/app/App"

document.addEventListener("DOMContentLoaded", function() {
    const root = document.querySelector("div#root");

    if (root) {
        root.appendChild(new App().load());
    }
    
});