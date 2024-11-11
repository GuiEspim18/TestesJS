import Input from "../Input.js";

class InputText extends Input {
    constructor() {
        super();
        this.tag.type = "text";
    }
}

export default InputText;