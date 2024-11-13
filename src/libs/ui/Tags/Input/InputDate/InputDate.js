import InputTyped from "../InputTyped/InputTyped.js";

class InputDate extends InputTyped {
    constructor() {
        super();
        this.tag.type = "date";
    }
}

export default InputDate;