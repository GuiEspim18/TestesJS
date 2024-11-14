import Input from "../Input.js";

class InputSubmit extends Input {
    constructor() {
        super();
        this.tag.type = "submit";
    }

    setValue(value) {
        this.tag.value = value;
    }
    
}

export default InputSubmit;