import InputTyped from "../InputTyped/InputTyped.js";

class InputPassword extends InputTyped {
    constructor() {
        super();
        this.tag.type = "password";
    }
}

export default InputPassword;