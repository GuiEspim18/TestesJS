import Component from "../libs/ui/Component/Component.js";
import HeaderStyle from "./HeaderStyle.js";

import Main from "../libs/ui/Tags/Main/Main.js";
import Measure from "../libs/ui/Types/Measure.js";
import FormCard from "./FormCard.js";

class App extends Component {

    constructor() {
        super();

        this.setPageColor("#FOFOFO");
        this.setFontFamily("arial");

        const header = new HeaderStyle();
        this.add(header);

        const main = new Main();
        main.setSize(100, Measure.PERCENT);

        main.add(new FormCard());

        this.add(main);

    }

}

export default App;