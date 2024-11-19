import Div from "../../../ui/Tags/Div/Div.js";
import InputText from "../../../ui/Tags/Input/InputText/InputText.js";
import BoxSizing from "../../../ui/Types/BoxSizing.js";
import Display from "../../../ui/Types/Display.js";
import Measure from "../../../ui/Types/Measure.js";
import Text from "../../Texts/Text/Text.js";

class TextField extends Div {
    constructor(text = "", name="") {
        super();

        this.setWidth(100, Measure.PERCENT);
        this.setMarginBottom(7);

        if (text.length > 0) {
            const label = new Text(text);
            label.setMargin(0);
            label.setMarginBottom(3);
            label.setFontSize(0.9, Measure.REM);
            label.setMarginLeft(2);
            this.add(label);
        }

        const holder = new Div();
        holder.setDisplay(Display.FLEX);
        holder.setPadding(5);
        holder.setBorder({
            color: "#474747",
            type: "solid",
        });
        holder.setBorderRadius(5);
        holder.setHeight(30);
        holder.setWidth(100, Measure.PERCENT);
        holder.setMargin(0);
        holder.setBoxSizing(BoxSizing.BORDER_BOX);
        holder.setTransition({
            duration: "0.2s"
        })
        this.add(holder);

        const input = new InputText();
        input.setBorder({
            type: "none",
            size: 0,
            color: "transparent"
        });
        input.setHeight(100, Measure.PERCENT);
        input.setWidth(100, Measure.PERCENT);
        input.setBackgroundColor("transparent");
        input.setMargin(0);
        input.setOutline("none");
        input.setPadding(0);
        holder.add(input);

        // Effects

        holder.onClick(function () {
            input.setFocus();
        });
        
        input.onFocusIn(function () {
            holder.setBorder({
                color: "#10d4f3",
                size: 2,
                type: "solid"
            });
            holder.setShadow({
                color: "#10d4f366",
                spread: 2.5
            });
        });

        input.onFocusOut(function () {
            holder.setBorder({
                color: "#474747",
                type: "solid"
            });
            holder.setShadow("none");
        });


    }
}

export default TextField;