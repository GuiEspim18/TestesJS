import Div from "../../ui/Tags/Div/Div.js";
import AlignItems from "../../ui/Types/AlignItems.js";
import BoxSizing from "../../ui/Types/BoxSizing.js";
import Display from "../../ui/Types/Display.js";
import Measure from "../../ui/Types/Measure.js";
import Text from "../Texts/Text/Text.js";

class Field extends Div {

    label;
    holder = new Div();
    input;
    name = "";

    constructor(text = "", name = "", placeholder = "") {
        super();

        this.name = name;

        this.placeholder = placeholder;

        if (text.length > 0) {
            this.label = new Text(text);
            this.add(this.label);
        }

        this.holder = new Div();
        this.add(this.holder);
        

    }

    loadStyles() {       
        if (this.placeholder.length > 0) {
            this.input.setPlaceholder(this.placeholder);
        }

        this.setWidth(100, Measure.PERCENT);
        this.setMarginBottom(7);

        if (this.label != null) {
            this.label.setMargin(0);
            this.label.setMarginBottom(3);
            this.label.setFontSize(0.9, Measure.REM);
            this.label.setMarginLeft(2);
        }

        this.holder.setDisplay(Display.FLEX);
        this.holder.setPadding(5);
        this.holder.setBorder({
            color: "#474747",
            type: "solid",
            size: 1
        });
        this.holder.setBorderRadius(5);
        this.holder.setHeight(30);
        this.holder.setBackgroundColor("#f5f5f5");
        this.holder.setWidth(100, Measure.PERCENT);
        this.holder.setMargin(0);
        this.holder.setBoxSizing(BoxSizing.BORDER_BOX);
        this.holder.setTransition({
            duration: "0.2s"
        });
        this.holder.setAlignItems(AlignItems.CENTER);

        this.input.setBorder("none");
        this.input.setHeight(100, Measure.PERCENT);
        this.input.setWidth(100, Measure.PERCENT);
        this.input.setBackgroundColor("transparent");
        this.input.setMargin(0);
        this.input.setOutline("none");
        this.input.setPadding(0);

        // effects

        this.holder.onClick(() => {
            this.input.setFocus();
        });
        
        this.input.onFocusIn(() => {
            this.holder.setBorder({
                color: "#10d4f3",
                size: 1,
                type: "solid"
            });
            this.holder.setShadow({
                color: "#10d4f366",
                spread: 2.5
            });
        });

        this.input.onFocusOut(() => {
            this.holder.setBorder({
                color: "#474747",
                type: "solid",
                size: 1
            });
            this.holder.setShadow("none");
        });
    }

    getValue() {
        return this.input.getValue();
    }

    setName(name) {
        this.name = name;
    }

    focus() {
        this.holder.setBorder({
            color: "#10d4f3",
            size: 1,
            type: "solid"
        });
        this.holder.setShadow({
            color: "#10d4f366",
            spread: 2.5
        });
    }

    exitFocus() {
        this.holder.setBorder({
            color: "#474747",
            type: "solid",
            size: 1
        });
        this.holder.setShadow("none");
    }

}

export default Field;