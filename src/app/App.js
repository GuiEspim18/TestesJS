import Component from "../libs/ui/Component/Component.js";
import Div from "../libs/ui/Tags/Div/Div.js";

class App extends Component {

    constructor() {
        super();
        
        const div = new Div("Teste");
        div.setBackgroundGradient({
            color1: {
                color: "#ffbc9b",
                percentage: 0
            },
            color2: {
                color: "#ff5500",
                percentage: 100
            },
            angle: 180,
        });
        div.setFontColor("#cccccc");
        div.setFontSize(15);
        div.setFontFamily("Arial");
        div.setBorder({width: 1, color: "black", style: "solid"});
        this.add(div);
    }

}

export default App;