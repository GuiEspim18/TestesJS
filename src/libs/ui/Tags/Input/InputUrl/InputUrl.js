import Input from "../Input.js";

class InputUrl extends Input {
    constructor() {
        super();
        this.tag.type = "url";
    }
}

export default InputUrl;