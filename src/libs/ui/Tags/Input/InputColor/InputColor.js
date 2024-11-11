import Input from "../Input.js";

class InputColor extends Input {
    constructor() {
        super();
        this.tag.type = "color";
    }
}

export default InputColor;