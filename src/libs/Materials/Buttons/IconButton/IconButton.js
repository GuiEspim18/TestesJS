import DefaultButton from "../DefaultButton/DefaultButton.js";
import Display from "../../../ui/Types/Display.js";
import AlignItems from "../../../ui/Types/AlignItems.js";
import JustifyContent from "../../../ui/Types/JustifyContent.js";
import P from "../../../ui/Tags/Text/P/P.js";

class IconButton extends DefaultButton {
    constructor(text = "", icon = "") {
        super();
        this.setDisplay(Display.FLEX);
        this.setAlignItems(AlignItems.CENTER);
        this.setJustifyContent(JustifyContent.CENTER);

        const textBtn = new P(text);
        textBtn.setMargin(0);
        this.add(textBtn);
    }
}

export default IconButton;