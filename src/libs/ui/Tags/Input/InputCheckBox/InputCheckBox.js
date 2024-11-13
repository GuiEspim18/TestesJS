import InputBinary from "../InputBinary/InputBinary.js";

class InputCheckBox extends InputBinary {
    constructor() {
        super();
        this.tag.type = "checkbox";
    }
}

export default InputCheckBox;