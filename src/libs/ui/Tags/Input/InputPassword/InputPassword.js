import Input from "../Input.js";

class InputPassword extends Input {
    constructor() {
        super();
        this.tag.type = "password";
    }
}

export default InputPassword;