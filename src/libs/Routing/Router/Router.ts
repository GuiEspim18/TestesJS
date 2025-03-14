import { routes } from "../../../app/Routes";

class Router {

    static getParam(param: string) {
        const currentPath: string = window.location.pathname;

        // Função auxiliar para verificar correspondência de rota e extrair parâmetros
        const matchRoute = (routePath: string, currentSegments: Array<string>) => {
            const pathSegments = routePath.split("/").filter(Boolean);
            if (pathSegments.length !== currentSegments.length) {
                return null;
            }

            let params: any;
            for (let i = 0; i < pathSegments.length; i++) {
                if (pathSegments[i].startsWith(":")) {
                    const paramName = pathSegments[i].substring(1);
                    params[paramName] = currentSegments[i];
                } else if (pathSegments[i] !== currentSegments[i]) {
                    return null;
                }
            }
            return params;
        };

        const currentSegments = currentPath.split("/").filter(Boolean);

        // Verifica rotas principais e filhos
        for (let route of routes) {
            // Verifica a rota principal
            let params = matchRoute(route.path, currentSegments);
            if (params) {
                return params[param];
            }

            // Verifica rotas filhas, se existirem
            if (route.children) {
                for (let child of route.children) {
                    const combinedPath = `${route.path}${child.path}`; // Combina caminho pai e filho
                    params = matchRoute(combinedPath, currentSegments);
                    if (params) {
                        return params[param];
                    }
                }
            }
        }

        return null; // Se nenhum parâmetro for encontrado
    }

}

export default Router;