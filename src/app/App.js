import Page from "../libs/ui/Page/Page.js";
import Div from "../libs/ui/Tags/Div/Div.js";

class App extends Page {

    constructor() {
        super();
        
        const div = new Div("Teste");
        this.add(div);
    }

}

export default App;