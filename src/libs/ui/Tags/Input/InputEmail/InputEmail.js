import InputTyped from "../InputTyped/InputTyped.js";

class InputEmail extends InputTyped {
    constructor() {
        super();
        this.tag.type = "email";
    }
}

export default InputEmail;