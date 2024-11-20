import Route from "../libs/Materials/Routing/Route/Route.js";
import Router from "../libs/Materials/Routing/Router/Router.js"
import Home from "./pages/Home/Home.js";

class Routes {
    constructor() {
        Router.setRoutes([
            new Route("/home", new Home())
        ]);
    }
}

export default Routes;