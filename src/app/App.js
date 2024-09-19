import Page from "../libs/ui/Page/Page";
import Div from "../libs/ui/Tags/Div/Div";

class App extends Page {

    constructor() {
        const div = new Div("Teste");
        this.add(div);
    }

}

export default App;