import InputTyped from "../InputTyped/InputTyped.js";

class InputMonth extends InputTyped {
    constructor() {
        super();
        this.tag.type = "month";
    }
}

export default InputMonth;