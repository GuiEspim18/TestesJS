import Section from "../libs/ui/Tags/Section/Section.js";
import P from "../libs/ui/Tags/Text/P/P.js";
import Display from "../libs/ui/Types/Display.js";
import FlexDirection from "../libs/ui/Types/FlexDirection.js";
import JustifyContent from "../libs/ui/Types/JustifyContent.js";
import AlignItems from "../libs/ui/Types/AlignItems.js";
import Measure from "../libs/ui/Types/Measure.js";
import MainButton from "./MainButton.js";
import InputText from "../libs/ui/Tags/Input/InputText/InputText.js";
import TextField from "../libs/Materials/Fields/TextField/TextField.js";

class Card extends Section {

    count = 0;

    constructor() {
        super();

        this.setWidth(40, Measure.PERCENT);
        this.setBackgroundColor("#f0f0f0");
        this.setBorder({ style: "none", radius: 10 });
        this.setMargin({ y: 30, x: "auto" });
        this.setPadding(10);
        this.setDisplay(Display.FLEX);
        this.setFlexDirection(FlexDirection.COLUMN);
        this.setJustifyContent(JustifyContent.CENTER);
        this.setAlignItems(AlignItems.CENTER);

        const text = new P("0");
        text.setFontColor("#7B68EE");
        text.setFontFamily("Arial");
        text.setFontSize(20);
        text.setMargin({x: 0, y: 12});
        this.add(text);

        const textField = new TextField("Nome");
        this.add(textField);

        const button = new MainButton("Click-me");
        button.onClick(() => {
            this.count++;
            text.setText(`${this.count}`);
        });
        this.add(button);
        
    }
}

export default Card;