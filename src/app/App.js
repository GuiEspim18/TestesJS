import Component from "../libs/ui/Component/Component.js";
import HeaderStyle from "./HeaderStyle.js";

import Main from "../libs/ui/Tags/Main/Main.js";
import Measure from "../libs/ui/Types/Measure.js";
import Card from "./Card.js";
import InputReset from "../libs/ui/Tags/Input/InputReset/InputReset.js";

class App extends Component {

    constructor() {
        super();

        this.setPageColor("#FOFOFO");

        const header = new HeaderStyle();
        this.add(header);

        const main = new Main();
        main.setSize(100, Measure.PERCENT);

        const test1 = new InputReset();
        main.add(test1);

        main.add(new Card());

        this.add(main);

    }

}

export default App;