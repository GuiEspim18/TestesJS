import InputTyped from "../InputTyped/InputTyped";

class InputDatetimeLocal extends InputTyped {
    constructor() {
        super();
        (this.tag as HTMLInputElement).type = "datetime-local";
    }
}

export default InputDatetimeLocal;