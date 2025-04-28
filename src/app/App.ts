import Component from "../libs/ui/Component/Component.js";
import Outlet from "../libs/Routing/Outlet/Outlet.js";
import Div from "../libs/ui/Tags/Div/Div.js";


class App extends Component {

    constructor() {
        super();

        new Outlet(this.add(new Div()));
    }

}

export default App;