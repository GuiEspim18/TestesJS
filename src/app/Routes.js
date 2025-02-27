import Home from "./pages/Home/Home.js";
import PlayGround from "./pages/Home/PlayGround.js";
import Test from "./pages/Home/Test.js";

export const routes = [
    {
        path: "/",
        redirect: "/play-ground"
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
        path: "/play-ground",
        component: PlayGround
    },
    {
        path: "/oi"
    }
];