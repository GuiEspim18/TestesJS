import { routes } from "../../../../app/Routes.js";

class Router {

    static getParam(param) {
        const currentPath = window.location.pathname;

        for (let item of routes) {
            const routerPath = item.path;
            const pathSegments = routerPath.split("/").filter(Boolean);
            const currentSegments = currentPath.split("/").filter(Boolean)

            if (pathSegments.length !== currentSegments.length) {
                continue;
            }

            let match = true;
            let params = { };

            for (let i = 0; i < pathSegments.length; i++) {
                if (pathSegments[i].startsWith(":")) {
                    console.log(pathSegments[i])
                    const pathName = pathSegments[i].substring(1);
                    params[pathName] = currentSegments[i];
                } else if (pathSegments[i] !== currentSegments[i]) {
                    match = false;
                    break;
                }
            }

            return params[param];
        }

    }

}

export default Router;