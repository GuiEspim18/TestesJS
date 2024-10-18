import Button from "../libs/ui/Tags/Button/Button.js";
import Measure from "../libs/ui/Types/Measure.js";
import Cursor from "../libs/ui/Types/Cursor.js";

class MainButton extends Button {
    constructor(text) {
        super(text);

        this.setWidth(80, Measure.PERCENT);
        this.setHeight(30);
        this.setBackgroundColor("#7B68EE");
        this.setBorder({ style: "none", radius: 10 });
        this.setCursor(Cursor.POINTER);
        this.setFontColor("#f0f0f0");
        this.setFontSize(12);

    }
}

export default MainButton;