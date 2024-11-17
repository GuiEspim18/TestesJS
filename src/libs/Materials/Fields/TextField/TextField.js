import Div from "../../../ui/Tags/Div/Div.js";
import Display from "../../../ui/Types/Display";

class TextField extends Div {
    constructor() {
        this.setDisplay(Display.FLEX);
        this.setPadding(5);
    }
}

export default TextField;