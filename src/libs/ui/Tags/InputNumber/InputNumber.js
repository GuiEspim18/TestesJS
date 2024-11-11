import Input from "../Input/Input.js";

class InputNumber extends Input {
    constructor() {
        super("input");
        this.tag.type = "number";
    }
}

export default InputNumber;