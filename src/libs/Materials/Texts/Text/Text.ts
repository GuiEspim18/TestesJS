import P from "../../../ui/Tags/Text/P/P";
import Measure from "../../../ui/Types/Measure";

class Text extends P {
     constructor(text = "") {
            super(text);
    
            this.setFontFamily("arial");
            this.setFontSize({ value: 1, measure: Measure.REM });
            this.setFontColor("#474747");
        }
}