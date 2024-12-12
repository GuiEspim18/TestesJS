import AlignItems from "../../../ui/Types/AlignItems.js";
import Display from "../../../ui/Types/Display.js";
import JustifyContent from "../../../ui/Types/JustifyContent.js";
import DefaultButton from "../DefaultButton/DefaultButton.js";

class IconRoundButton extends DefaultButton {

    constructor(icon = null) {
        super();
        this.setDisplay(Display.FLEX);
        this.setAlignItems(AlignItems.CENTER);
        this.setJustifyContent(JustifyContent.CENTER);
        this.setWidth(30);
        this.setHeight(30);
        this.setBorderRadius(30);
        this.setBackgroundColor("#00000040");

        this.add(icon);
    }

}

export default IconRoundButton;