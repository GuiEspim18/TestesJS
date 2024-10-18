import Button from "../libs/ui/Tags/Button/Button.js";
import Cursor from "../libs/ui/Types/Cursor.js"

class MainButton extends Button {
    constructor(text) {
        super(text);

        this.setBackgroundColor("#7B68EE");
        this.setFontColor("#F0F0F0");
        this.setBorder({ style: "none", radius: 5 });
        this.setHeight(30);
        this.setWidth(100);
        this.setCursor(Cursor.POINTER);
    }
}

export default MainButton;