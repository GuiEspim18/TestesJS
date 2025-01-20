import DefaultButton from "../DefaultButton/DefaultButton.js";
import Display from "../../../ui/Types/Display.js";
import AlignItems from "../../../ui/Types/AlignItems.js";
import JustifyContent from "../../../ui/Types/JustifyContent.js";
import P from "../../../ui/Tags/Text/P/P.js";
import Div from "../../../ui/Tags/Div/Div.js";
import Icon from "../../Icons/Icon.js";

class IconButton extends DefaultButton {

    divIcon;
    textBtn;
    icon;

    constructor(text = "", icon = null) {
        super();
        this.setDisplay(Display.FLEX);
        this.setAlignItems(AlignItems.CENTER);
        this.setJustifyContent(JustifyContent.CENTER);

        this.divIcon = new Div();
        this.divIcon.setMarginRight(10);
        this.add(this.divIcon);

        if (icon != null) {
            this.icon = icon();
            this.icon.setFill("#f0f0f0");
            this.icon.setSize(20);
            this.divIcon.add(this.icon);
        }

        if (text.length > 0) {
            this.textBtn = new P(text);
            this.textBtn.setMargin(0);
            this.add(this.textBtn);
        }

    }

    setIcon(icon) {
        this.icon = new Icon(icon);
        this.icon.setFill("#f0f0f0");
        this.icon.setSize(20);
        this.divIcon.add(this.icon);
    }
    
    setColor(color) {
        this.textBtn.setFontColor(color);
        this.icon.setFill(color);
    }
}

export default IconButton;