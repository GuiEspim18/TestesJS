import Input from "../Input.js";

class InputDatetimeLocal extends Input {
    constructor() {
        super();
        this.tag.type = "datetime-local";
    }
}

export default InputDatetimeLocal;