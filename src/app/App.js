import Component from "../libs/ui/Component/Component.js";
import HeaderStyle from "./HeaderStyle.js";

import Main from "../libs/ui/Tags/Main/Main.js";
import Measure from "../libs/ui/Types/Measure.js";
import Section from "../libs/ui/Tags/Section/Section.js";
import P from "../libs/ui/Tags/P/P.js";
import TextAlignment from "../libs/ui/Types/TextAlignment.js";
import Button from "../libs/ui/Tags/Button/Button.js";

import MainButton from "./MainButton.js";

class App extends Component {

    constructor() {
        super();

        this.setPageColor("#FOFOFO");

        const main = new Main();
        main.setSize(100, Measure.PERCENT);

        const header = new HeaderStyle();
        main.add(header);

        const section = new Section();
        section.setPaddingHorizontal(10);
        main.add(section)

        let value = "Olá Mundo! ";
        let count = 0;

        const text = new P(value + count);
        text.setFontColor("#7B68EE");
        text.setFontFamily("Arial");
        text.setTextAlign(TextAlignment.CENTER);
        text.setFontSize(20);

        const button = new MainButton("Teste");
        button.onClick(function () {
            count++;
            text.setText(value + count);
        });
        button.onMouseEnter(function() {
            button.setBackgroundColor("red");
        });
        button.onMouseLeave(function () {
            button.setBackgroundColor("#7B68EE");
        });
        main.add(button);

        section.add(text);

        this.add(main);

    }

}

export default App;