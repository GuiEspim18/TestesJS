import InputTyped from "../InputTyped/InputTyped.js";

class InputText extends InputTyped {
    constructor() {
        super();
        this.tag.type = "text";
    }
}

export default InputText;