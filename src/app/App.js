import Component from "../libs/ui/Component/Component.js";
import Div from "../libs/ui/Tags/Div/Div.js";
import Header from "../libs/ui/Tags/Header/Header.js";
import Section from "../libs/ui/Tags/Section/Section.js";
import Measure from "../libs/ui/Types/Measure.js";
import Table from "../libs/ui/Tags/Table/Table.js";
import Ul from "../libs/ui/Tags/Ul/Ul.js";
import List from "./List.js";

class App extends Component {

    constructor() {
        super();

        const list1 = new List(["Guilherme", "Lucas", "Vinicius", "Pedro"]);
        this.add(list1);

        this.add(new List(["Outra lista 2"]));
    }

}

export default App;