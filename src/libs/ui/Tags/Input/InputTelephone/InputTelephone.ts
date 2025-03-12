import InputTyped from "../InputTyped/InputTyped";

class InputTelephone extends InputTyped {
    constructor() {
        super();
        (this.tag as HTMLInputElement).type = "tel";
    }
}

export default InputTelephone;