class Route {
    path = "";
    component = null;
    children = new Array();

    constructor(path, component = null, children = null) {
        this.path = path;
        this.component = component;
        this.children = children;
    }
}

export default Route;