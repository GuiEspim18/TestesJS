import { routes } from "../../../../app/Routes.js";

class Outlet {
    constructor(element) {   
        const oldPushState = history.pushState;
        history.pushState = function pushState() {
            const ret = oldPushState.apply(this, arguments);
            window.dispatchEvent(new Event("pushstate"));
            window.dispatchEvent(new Event("locationchange"));
            return ret;
        };

        const oldReplaceState = history.replaceState;
        history.replaceState = function replaceState() {
            const ret = oldReplaceState.apply(this, arguments);
            window.dispatchEvent(new Event("replacestate"));
            window.dispatchEvent(new Event("locationchange"));
            return ret;
        };

        window.addEventListener("popstate", () => {
            window.dispatchEvent(new Event("locationchange"));
        });

        window.addEventListener("locationchange", () => {
            this.setComponent(element);
        });
        
        this.setComponent(element);
    }

    setComponent(element) {
        element.removeAll();
        for (let item of routes) {
            let path = item.path;
            if (path.includes("/:id")) {
                const index = path.indexOf("/:id");
                path = path.substring(0, index);
            }
            if (path === window.location.pathname) {
                if(item.redirect) {
                    history.pushState(null, "", item.redirect);
                } else {
                    element.removeAll();
                    element.add(new item.component());
                }
            }
        }
    }
}

export default Outlet;