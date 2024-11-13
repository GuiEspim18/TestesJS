import Input from "../Input.js";

class InputCheckBox extends Input {
    constructor() {
        super();
        this.tag.type = "checkbox";
    }
}

export default InputCheckBox;