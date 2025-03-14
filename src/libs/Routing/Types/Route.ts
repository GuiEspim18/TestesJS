import Tag from "../../ui/Tags/Tag";

type Route = {
    path: string,
    component?: Tag // mudar,
    children: Array<Route>
};

export default Route;