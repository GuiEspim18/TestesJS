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
        element.removeAll(); // Remove o conteúdo existente
    const currentPath = window.location.pathname; // Caminho atual

    // Itera sobre todas as rotas para encontrar uma correspondência
    for (let item of routes) {
        const routePath = item.path; // Caminho da rota principal
        const currentSegments = currentPath.split('/').filter(Boolean); // Segmentos da URL atual

        let match = true;
        let params = {};
        let matchedChild = null;

        // Verificar se há rotas filhas
        if (item.children) {
            for (let child of item.children) {
                const childPath = child.path;
                const childSegments = childPath.split('/').filter(Boolean);

                if (childSegments.length === currentSegments.length) {
                    let childMatch = true;
                    const childParams = {};

                    for (let i = 0; i < childSegments.length; i++) {
                        if (childSegments[i].startsWith(':')) {
                            const paramName = childSegments[i].substring(1);
                            childParams[paramName] = currentSegments[i];
                        } else if (childSegments[i] !== currentSegments[i]) {
                            childMatch = false;
                            break;
                        }
                    }

                    if (childMatch) {
                        matchedChild = child;
                        params = childParams;
                        break;
                    }
                }
            }
        }

        if (!matchedChild) {
            // Verificar a rota principal
            const routeSegments = routePath.split('/').filter(Boolean);
            if (routeSegments.length !== currentSegments.length) {
                continue;
            }

            for (let i = 0; i < routeSegments.length; i++) {
                if (routeSegments[i].startsWith(':')) {
                    const paramName = routeSegments[i].substring(1);
                    params[paramName] = currentSegments[i];
                } else if (routeSegments[i] !== currentSegments[i]) {
                    match = false;
                    break;
                }
            }
        }

        if (match || matchedChild) {
            const matchedRoute = matchedChild || item;

            if (matchedRoute.redirect) {
                history.pushState(null, "", matchedRoute.redirect);
            } else {
                const componentInstance = new matchedRoute.component();
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