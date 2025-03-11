type Route = {
    path: string,
    component?: any // mudar,
    children: Array<Route>
};

export default Route;