import InputTyped from "../InputTyped/InputTyped";

class InputEmail extends InputTyped {
    constructor() {
        super();
        (this.tag as HTMLInputElement).type = "email";
    }
}

export default InputEmail;