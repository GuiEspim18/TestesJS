import Div from "../../ui/Tags/Div/Div.js";

class Field extends Div {

    label;
    holder;
    input;
    name = "";

    constructor(text = "", name = "", placehoder = "") {
        super();
    }

}

export default Field;