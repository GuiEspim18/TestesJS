import Component from "../libs/ui/Component/Component.js";
import Div from "../libs/ui/Tags/Div/Div.js";
import Measure from "../libs/ui/Types/Measure.js";

class App extends Component {

    constructor() {
        super();
        
        const div = new Div("Teste");
        div.setBackgroundColor("#ff5500");
        div.setBorder({width: 1, color: "black", style: "solid", radius: 4});
        this.add(div);
    }

}

export default App;