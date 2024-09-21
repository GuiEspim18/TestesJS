import Component from "../libs/ui/Component/Component.js";
import Div from "../libs/ui/Tags/Div/Div.js";
import Header from "../libs/ui/Tags/Header/Header.js";

class App extends Component {

    constructor() {
        super();
        
        const header = new Header();
        header.setHeight(80);
        header.setBackgroundGradient({
            color1: {
                color: "#f3f3f3",
                percentage: 0
            }, 
            color2: {
                color: "#cbcbcb",
                percentage: 100
            },
            angle: 180
        });

        this.add(header);
    }

}

export default App;