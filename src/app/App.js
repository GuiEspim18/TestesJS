import Outlet from "../libs/Materials/Routing/Outlet/Outlet.js";
import Component from "../libs/ui/Component/Component.js";
import Div from "../libs/ui/Tags/Div/Div.js";

class App extends Component {

    constructor() {
        super();
        const div = new Div();
        new Outlet(div);
        this.add(div);
    }

}

export default App;