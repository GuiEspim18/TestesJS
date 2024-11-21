import Route from "../libs/Materials/Routing/Route/Route.js";
import Home from "./pages/Home/Home.js";
import Test from "./pages/Home/Test.js";

export const routes = [
    new Route("/home", Home),
    new Route("/test", Test)
];