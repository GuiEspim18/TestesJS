import P from "../../../ui/Tags/Text/P/P.js";
import Measure from "../../../ui/Types/Measure.js";

class Text extends P {
    constructor(text = "") {
        super(text);

        this.setFontFamily("arial");
        this.setFontSize(1, Measure.REM);
        this.setFontColor("#474747");
    }
}

export default Text;