import Div from "../../../ui/Tags/Div/Div.js";
import P from "../../../ui/Tags/Text/P/P.js";
import AlignItems from "../../../ui/Types/AlignItems.js";
import Display from "../../../ui/Types/Display.js";
import JustifyContent from "../../../ui/Types/JustifyContent.js";
import Measure from "../../../ui/Types/Measure.js";
import IconRoundButton from "../../Buttons/IconRoundButton/IconRoundButton.js";
import Icons from "../../Icons/Icons.js";

class CounterField extends Div {
    counter = 0;
    minimun = 0;
    maximun = null;

    constructor() {
        super();

        this.setDisplay(Display.FLEX);
        this.setAlignItems(AlignItems.CENTER);
        this.setPadding(5);
        
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
        this.text.setMargin(0);
        this.text.setFontSize(1.7, Measure.REM);
        this.text.setMarginHorizontal(5);
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

    setButtonsColor(color) {
        this.minus.setBackgroundColor(color);
        this.plus.setBackgroundColor(color);
    }

    setButtonsFontColor(color) {
        this.minus.setIconColor(color);
        this.plus.setIconColor(color);
    }
}

export default CounterField;