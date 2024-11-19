import Div from "../../../ui/Tags/Div/Div.js";
import BoxSizing from "../../../ui/Types/BoxSizing.js";
import Display from "../../../ui/Types/Display.js";
import Measure from "../../../ui/Types/Measure.js";
import Text from "../../Texts/Text/Text.js";

class TextField extends Div {
    constructor(text = "", name="") {
        super();

        this.setWidth(100, Measure.PERCENT);

        if (text.length > 0) {
            const label = new Text(text);
            label.setMargin(0);
            label.setFontSize(0.9, Measure.REM);
            label.setMarginLeft(2);
            this.add(label);
        }

        const input = new Div();
        input.setDisplay(Display.FLEX);
        input.setPadding(5);
        input.setBorder({
            color: "#474747",
            size: 1,
            type: "solid",
        });
        input.setBorderRadius(5);
        input.setHeight(30);
        input.setWidth(100, Measure.PERCENT);
        input.setMargin(0);
        input.setBoxSizing(BoxSizing.BORDER_BOX);
        this.add(input);


    }
}

export default TextField;