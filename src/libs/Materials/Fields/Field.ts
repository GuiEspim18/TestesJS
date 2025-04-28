import Div from "../../ui/Tags/Div/Div";
import Input from "../../ui/Tags/Input/Input";
import InputFile from "../../ui/Tags/Input/InputFile/inputFile";
import InputTyped from "../../ui/Tags/Input/InputTyped/InputTyped";
import Select from "../../ui/Tags/Input/Select/Select";
import TextArea from "../../ui/Tags/Input/TextArea/TextArea";
import Tag from "../../ui/Tags/Tag";
import P from "../../ui/Tags/Text/P/P";
import AlignItems from "../../ui/Types/AlignItems";
import BoxSizing from "../../ui/Types/BoxSizing";
import Display from "../../ui/Types/Display";
import Measure from "../../ui/Types/Measure";

class Field extends Div {

    protected holder: Div = new Div();
    protected input: InputTyped | Input | InputFile | Select | TextArea;
    protected name: string = "";
    public type: number | null = null;
    protected placeholder: string = "";
    protected label: Tag | null ;

    constructor(text: string = "", name: string = "", placeholder: string = "") {
        super();

        this.name = name;

        this.placeholder = placeholder;

        if (text.length > 0) {
            this.label = new P(text);
            this.add(this.label);
        }

        this.holder = new Div();
        this.add(this.holder);


    }

    loadStyles() {
        if (this.placeholder.length > 0) {
            if (this.input instanceof InputTyped) {
                this.input.setPlaceholder(this.placeholder);
            }
        }

        this.setWidth(100, Measure.PERCENT);
        this.setMarginBottom({ value: 7 });

        if (this.label != null) {
            this.label.setMargin({ value: 0 });
            this.label.setMarginBottom({ value: 3 });
            this.label.setFontSize({ value: 0.9, measure: Measure.REM});
            this.label.setMarginLeft({ value: 2 });
        }

        this.holder.setDisplay(Display.FLEX);
        this.holder.setPadding({ value: 5 });
        this.holder.setBorder({
            color: "#474747",
            type: "solid",
            size: { value: 1 }
        });
        this.holder.setBorderRadius({ value: 5 });
        this.holder.setHeight(30);
        this.holder.setBackgroundColor("#f5f5f5");
        this.holder.setWidth(100, Measure.PERCENT);
        this.holder.setMargin({ value: 0 });
        this.holder.setBoxSizing(BoxSizing.BORDER_BOX);
        this.holder.setTransition({
            duration: {
                value: 0.2,
                measure: TimeMeasure.S
            }
        });
        this.holder.setAlignItems(AlignItems.CENTER);

        this.input.setBorder("none");
        this.input.setHeight(100, Measure.PERCENT);
        this.input.setWidth(100, Measure.PERCENT);
        this.input.setBackgroundColor("transparent");
        this.input.setMargin({ value: 0 });
        this.input.setOutline("none");
        this.input.setPadding({ value: 0 });

        // effects

        this.holder.onClick(() => {
            (this.input as Input).setFocus();
        });

        this.input.onFocusIn(() => {
            this.holder.setBorder({
                color: "#10d4f3",
                size: {
                    value: 1
                },
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
                size: {
                    value: 1
                }
            });
            this.holder.setShadow("none");
        });
    }

    getValue() {
        return this.input.getValue();
    }

    setName(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    focus() {
        this.holder.setBorder({
            color: "#10d4f3",
            size: {
                value: 1
            },
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
            size: {
                value: 1
            }
        });
        this.holder.setShadow("none");
    }

    setInvalid() {
        this.holder.setBorder({
            color: "#e14e4e",
            size: {
                value: 1
            },
            type: "solid"
        });
        this.holder.setShadow({
            color: "#e14e4e66",
            spread: 2.5
        });
    }

}

export default Field;