import DefaultButton from "../DefaultButton/DefaultButton.js";

class TabButton extends DefaultButton {

    constructor(text = "", page = "") {
        super(text);

        this.setBorderTopRadius(5);
        this.setBorderBottomRadius(0);
        this.setMarginHorizontal(2.5);

    }

}

export default TabButton;