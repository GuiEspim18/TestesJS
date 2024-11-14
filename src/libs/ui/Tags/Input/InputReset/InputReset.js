import Input from "../Input.js";

class InputReset extends Input {
    constructor() {
        super();
        this.tag.type = "reset";
    }

    setValue(value) {
        this.tag.value = value;
    }
}

export default InputReset;