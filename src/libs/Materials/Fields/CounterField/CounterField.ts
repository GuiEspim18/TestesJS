import Div from "../../../ui/Tags/Div/Div";
import Tag from "../../../ui/Tags/Tag";
import P from "../../../ui/Tags/Text/P/P";
import AlignItems from "../../../ui/Types/AlignItems";
import Display from "../../../ui/Types/Display";
import Measure from "../../../ui/Types/Measure";
import IconRoundButton from "../../Buttons/IconRoundButton/IconRoundButton";
import Icons from "../../Icons/Icons";
import FieldType from "../FieldType";

class CounterField extends Div {
    private counter: number = 0;
    private minimun: number = 0;
    private maximun: number;
    private type = FieldType.COUNTER;

    private minus: IconRoundButton;
    private plus: IconRoundButton;
    private text: Tag;

    constructor() {
        super();

        this.setDisplay(Display.FLEX);
        this.setAlignItems(AlignItems.CENTER);
        this.setPadding({ value: 5 });
        
        this.minus = new IconRoundButton(Icons.MINUS);
        this.minus.onClick(() => {
            if (this.minimun != null) {
                if (this.counter > this.minimun) {
                    this.counter--;
                }
            } else {
                this.counter--;
            }
            this.text.setText(String(this.counter));
        });
        this.add(this.minus);

        this.text = new P(String(this.counter));
        this.text.setMargin({ value: 0 });
        this.text.setFontSize({ value: 1.7, measure: Measure.REM});
        this.text.setMarginHorizontal({ value: 5 });
        this.add(this.text);

        this.plus = new IconRoundButton(Icons.PLUS);
        this.plus.onClick(() => {
            if (this.maximun != null) {
                if (this.counter < this.maximun) {
                    this.counter++;
                }
            } else {
                this.counter++;
            }
    
            this.text.setText(String(this.counter));
        });
        this.add(this.plus);

    }

    setButtonsColor(color: string) {
        this.minus.setBackgroundColor(color);
        this.plus.setBackgroundColor(color);
    }

    setButtonsFontColor(color: string) {
        this.minus.setIconColor(color);
        this.plus.setIconColor(color);
    }
}

export default CounterField;