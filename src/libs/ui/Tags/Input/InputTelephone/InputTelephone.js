import InputTyped from "../InputTyped/InputTyped.js";

class InputTelephone extends InputTyped {
    constructor() {
        super();
        this.tag.type = "tel";
    }
}

export default InputTelephone;