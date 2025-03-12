import InputTyped from "../InputTyped/InputTyped";

class InputMonth extends InputTyped {
    constructor() {
        super();
        (this.tag as HTMLInputElement).type = "month";
    }
}

export default InputMonth;