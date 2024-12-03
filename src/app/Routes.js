import Home from "./pages/Home/Home.js";
import Test from "./pages/Home/Test.js";

export const routes = [
    {
        path: "/",
        redirect: "/home"
    }, 
    {
        path: "/home",
        component: Home
    },
    { 
        path: "/test",
        children: [
            {
                path: "/:id",
                component: Test,
            },
            {
                path: "/user/:id",
                component: Test
            }
        ]
    }, 
    {
        path: "/oi"
    }
];