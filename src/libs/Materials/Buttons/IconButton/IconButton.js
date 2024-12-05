import DefaultButton from "../DefaultButton/DefaultButton.js";
import Display from "../../../ui/Types/Display.js";
import AlignItems from "../../../ui/Types/AlignItems.js";
import JustifyContent from "../../../ui/Types/JustifyContent.js";
import P from "../../../ui/Tags/Text/P/P.js";
import Div from "../../../ui/Tags/Div/Div.js";

class IconButton extends DefaultButton {

    divIcon;

    constructor(text = "", icon = null) {
        super();
        this.setDisplay(Display.FLEX);
        this.setAlignItems(AlignItems.CENTER);
        this.setJustifyContent(JustifyContent.CENTER);

        this.divIcon = new Div();
        this.divIcon.setMarginRight(10);
        this.add(this.divIcon);

        if (icon != null) {
            icon.setFill("#f0f0f0");
            icon.setSize(20);
            this.divIcon.add(icon);
        }

        const textBtn = new P(text);
        textBtn.setMargin(0);
        this.add(textBtn);
    }

    setIcon(icon) {
        this.divIcon.add(icon);
    }
}

export default IconButton;