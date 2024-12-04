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
        const currentPath = window.location.pathname; // Caminho atual completo
    
        let matchedRoute = null; // Rota correspondente
        let params = {}; // Parâmetros dinâmicos extraídos
    
        // Função auxiliar para verificar correspondência de rota
        const matchRoute = (routePath, currentSegments) => {
            const pathSegments = routePath.split('/').filter(Boolean);
            if (pathSegments.length !== currentSegments.length) {
                return false;
            }
            for (let i = 0; i < pathSegments.length; i++) {
                if (pathSegments[i].startsWith(':')) {
                    const paramName = pathSegments[i].substring(1);
                    params[paramName] = currentSegments[i];
                } else if (pathSegments[i] !== currentSegments[i]) {
                    return false;
                }
            }
            return true;
        };
    
        const currentSegments = currentPath.split('/').filter(Boolean);
    
        // Itera sobre todas as rotas principais
        for (let route of routes) {
            const routeSegments = route.path.split('/').filter(Boolean);
    
            // Verifica se a rota principal corresponde
            if (matchRoute(route.path, currentSegments)) {
                matchedRoute = route;
                break;
            }
    
            // Verifica as rotas filhas, se existirem
            if (route.children && currentSegments[0] === routeSegments[0]) {
                for (let child of route.children) {
                    const combinedPath = `${route.path}${child.path}`; // Combina o caminho do pai com o do filho
                    const childSegments = combinedPath.split('/').filter(Boolean);
    
                    if (matchRoute(combinedPath, currentSegments)) {
                        matchedRoute = child;
                        break;
                    }
                }
            }
    
            if (matchedRoute) {
                break;
            }
        }
    
        if (matchedRoute) {
            if (matchedRoute.redirect) {
                history.pushState(null, "", matchedRoute.redirect);
            } else {
                const componentInstance = new matchedRoute.component();
                if (componentInstance.setParams) {
                    componentInstance.setParams(params);
                }
                element.add(componentInstance);
            }
        } else {
            console.error("Nenhuma rota encontrada para o caminho:", currentPath);
        }
    }
    
    
}

export default Outlet;