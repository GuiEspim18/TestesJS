import Input from "../Input.js";

class InputEmail extends Input {
    constructor() {
        super();
        this.tag.type = "email";
    }
}

export default InputEmail;