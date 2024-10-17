import Component from "../libs/ui/Component/Component.js";
import Div from "../libs/ui/Tags/Div/Div.js";
import Header from "../libs/ui/Tags/Header/Header.js";
import Section from "../libs/ui/Tags/Section/Section.js";
import Measure from "../libs/ui/Types/Measure.js";
import Table from "../libs/ui/Tags/Table/Table.js";
import Ul from "../libs/ui/Tags/Ul/Ul.js";
import List from "./List.js";
import Ol from "../libs/ui/Tags/Ol/Ol.js";
import P from "../libs/ui/Tags/P/P.js";
import H1 from "../libs/ui/Tags/H1/H1.js";
import H2 from "../libs/ui/Tags/H2/H2.js";
import H3 from "../libs/ui/Tags/H3/H3.js";
import H4 from "../libs/ui/Tags/H4/H4.js";
import H5 from "../libs/ui/Tags/H5/H5.js";
import H6 from "../libs/ui/Tags/H6/H6.js";
import B from "../libs/ui/Tags/B/B.js";
import I from "../libs/ui/Tags/I/I.js";
import S from "../libs/ui/Tags/S/S.js";

class App extends Component {

    constructor() {
        super();

        this.add(new P("Teste de P"));
        this.add(new H1("Teste de H1"));
        this.add(new H2("Teste de H2"));
        this.add(new H3("Teste de H3"));
        this.add(new H4("Teste de H4"));
        this.add(new H5("Teste de H5"));
        this.add(new H6("Teste de H6"));
        this.add(new B("Teste de Bold"));
        this.add(new I("Teste de italic"));
        this.add(new S("Teste de texto riscado"));
    }

}

export default App;