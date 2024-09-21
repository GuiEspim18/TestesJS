import Component from "../libs/ui/Component/Component.js";
import Div from "../libs/ui/Tags/Div/Div.js";
import Header from "../libs/ui/Tags/Header/Header.js";
import Section from "../libs/ui/Tags/Section/Section.js";
import Measure from "../libs/ui/Types/Measure.js";
import Table from "../libs/ui/Tags/Table/Table.js";

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

        const section = new Section();
        section.setHeight(100, Measure.PERCENT);
        this.add(section);

        const table = new Table();
        table.addHeader(["Nome", "Sobrenome", "Email"], );
        table.addRow(["Guilherme", "Monteiro Espim", "guilherme.monteiro.espim@gmail.com"], {});
        table.setFontFamily("Arial");
        this.add(table);
    }

}

export default App;