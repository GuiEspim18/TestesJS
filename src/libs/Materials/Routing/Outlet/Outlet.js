import { routes } from "../../../../app/Routes.js";

class Outlet {

    constructor(element) {      
        window.addEventListener("popstate", () => {
            for (let item of routes) {
                if (item.path == window.location.pathname) {
                    element.add(new item.component());
                }
            }
        });    
        for (let item of routes) {
            console.log(window.location);
            if (item.path == window.location.pathname) {
                element.add(new item.component());
            }
        }
    }
}

export default Outlet;