import InputTyped from "../InputTyped/InputTyped";

class InputText extends InputTyped {
    constructor() {
        super();
        (this.tag as HTMLInputElement).type = "text";
    }
}

export default InputText;