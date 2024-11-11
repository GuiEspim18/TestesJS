import Input from "../Input.js";

class InputTelephone extends Input {
    constructor() {
        super();
        this.tag.type = "tel";
    }
}

export default InputTelephone;