import InputBinary from "../InputBinary/InputBinary";

class InputCheckBox extends InputBinary {
    constructor() {
        super();
        (this.tag as HTMLInputElement).type = "checkbox";
    }
}

export default InputCheckBox;