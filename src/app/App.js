import Component from "../libs/ui/Component/Component.js";
import Div from "../libs/ui/Tags/Div/Div.js";

class App extends Component {

    constructor() {
        super();
        
        const div = new Div("Teste");
        div.setBackgroundColor("#ff5500");
        div.setFontColor("#cccccc");
        div.setFontSize(15);
        div.setFontFamily("Arial");
        div.setBorder({width: 1, color: "black", style: "solid", radius: 4});
        this.add(div);
    }

}

export default App;