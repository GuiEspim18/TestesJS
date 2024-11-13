import InputTyped from "../InputTyped/InputTyped.js";

class InputTime extends InputTyped {
    constructor() {
        super();
        this.tag.type = "time";
    }
}

export default InputTime;