import AlignItems from "../../../ui/Types/AlignItems.js";
import Display from "../../../ui/Types/Display.js";
import JustifyContent from "../../../ui/Types/JustifyContent.js";
import Icon from "../../Icons/Icon.js";
import DefaultButton from "../DefaultButton/DefaultButton.js";

class IconRoundButton extends DefaultButton {

    icon = null;

    constructor(icon = null) {
        super();
        this.setDisplay(Display.FLEX);
        this.setAlignItems(AlignItems.CENTER);
        this.setJustifyContent(JustifyContent.CENTER);
        this.setWidth(30);
        this.setHeight(30);
        this.setBorderRadius(30);
        this.setBackgroundColor("#00000040");

        if (icon) {
            this.icon = new Icon(icon);
            this.add(this.icon);
        }

    }

    setIcon(icon) {
        if (this.icon) {
            this.removeAll();
        }
        this.icon = new Icon(icon);
        this.add(this.icon);
    }

    setIconColor(color) {
        this.icon.setFill(color);
    }

}

export default IconRoundButton;