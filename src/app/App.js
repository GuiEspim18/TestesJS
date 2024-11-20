import DefaultButton from "../libs/Materials/Buttons/DefaultButton/DefaultButton.js";
import Component from "../libs/ui/Component/Component.js";

class App extends Component {

    constructor() {
        super();
        this.add(new DefaultButton("Teste"));
    }

}

export default App;