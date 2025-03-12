import InputBinary from "../InputBinary/InputBinary";

class InputRadio extends InputBinary {
    constructor() {
        super();
        (this.tag as HTMLInputElement).type = "radio";
    }
}

export default InputRadio;