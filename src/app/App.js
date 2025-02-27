import Component from "../libs/ui/Component/Component.js";
import Outlet from "../libs/Materials/Routing/Outlet/Outlet.js";
import Div from "../libs/ui/Tags/Div/Div.js";


class App extends Component {

    constructor() {
        super();

        const outlet = new Div();
        new Outlet(outlet);
        this.add(outlet);
    }

}

export default App;