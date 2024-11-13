import InputBinary from "../InputBinary/InputBinary.js";

class InputRadio extends InputBinary {
    constructor() {
        super();
        this.tag.type = "radio";
    }
}

export default InputRadio;