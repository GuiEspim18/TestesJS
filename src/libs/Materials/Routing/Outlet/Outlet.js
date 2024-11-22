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
            // Remove all children of the element
            element.removeAll();

            // Add the component corresponding to the current path
            for (let item of routes) {
                if (item.path === window.location.pathname) {
                    element.add(new item.component());
                }
            }
        });

        // Initialize with the current route
        for (let item of routes) {
            if (item.path === window.location.pathname) {
                element.add(new item.component());
            }
        }
    }
}

export default Outlet;