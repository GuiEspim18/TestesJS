import InputTyped from "../InputTyped/InputTyped";

class InputPassword extends InputTyped {
    constructor() {
        super();
        (this.tag as HTMLInputElement).type = "password";
    }
}

export default InputPassword;