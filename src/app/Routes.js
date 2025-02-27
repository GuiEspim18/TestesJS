import PlayGround from "./pages/PlayGround/PlayGround.js";

export const routes = [
    {
        path: "/",
        redirect: "/play-ground"
    }, 
    {
        path: "/play-ground",
        component: PlayGround
    },
    {
        path: "/oi"
    }
];