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
        const currentPath = window.location.pathname;
        
        for (let item of routes) {
            const routePath = item.path;
            const pathSegments = routePath.split('/').filter(Boolean);
            const currentSegments = currentPath.split('/').filter(Boolean);

            if (pathSegments.length !== currentSegments.length) {
                continue;
            }

            let match = true;
            let params = {};

            for (let i = 0; i < pathSegments.length; i++) {
                if (pathSegments[i].startsWith(':')) {
                    const paramName = pathSegments[i].substring(1);
                    params[paramName] = currentSegments[i];
                } else if (pathSegments[i] !== currentSegments[i]) {
                    match = false;
                    break;
                }
            }

            if (match) {
                if (item.redirect) {
                    history.pushState(null, "", item.redirect);
                } else {
                    element.removeAll();
                    const componentInstance = new item.component();
                    if (componentInstance.setParams) {
                        componentInstance.setParams(params);
                    }
                    element.add(componentInstance);
                }
                break;
            }
        }
    }
}

export default Outlet;