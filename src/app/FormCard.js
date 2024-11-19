import TextField from "../libs/Materials/Fields/TextField/TextField.js";
import Div from "../libs/ui/Tags/Div/Div.js";
import H1 from "../libs/ui/Tags/Text/H1/H1.js";
import AlignItems from "../libs/ui/Types/AlignItems.js";
import Display from "../libs/ui/Types/Display.js";
import FlexDirection from "../libs/ui/Types/FlexDirection.js";
import JustifyContent from "../libs/ui/Types/JustifyContent.js";
import Measure from "../libs/ui/Types/Measure.js";
import TextAlignment from "../libs/ui/Types/TextAlignment.js";
import Button from "../libs/ui/Tags/Button/Button.js";

class FormCard extends Div {
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

        const title = new H1("Formulário");
        title.setTextAlign(TextAlignment.CENTER);
        this.add(title);

        const name = new TextField("Nome", "name");
        this.add(name);

        const email = new TextField("Email", "email", "example@email.com");
        this.add(email);

        const btn = new Button("submit");
        
        btn.onClick(() => {
            console.log(name.getValue());   
        });

        this.add(btn);
    }
}

export default FormCard;