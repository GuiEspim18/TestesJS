import InputTyped from "../InputTyped/InputTyped.js";

class InputDatetimeLocal extends InputTyped {
    constructor() {
        super();
        this.tag.type = "datetime-local";
    }
}

export default InputDatetimeLocal;