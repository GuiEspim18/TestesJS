import Input from "../Input.js";

class InputDate extends Input {
    constructor() {
        super();
        this.tag.type = "date";
    }
}

export default InputDate;