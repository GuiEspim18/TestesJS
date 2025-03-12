import Input from "../Input";

class InputReange extends Input {
    constructor() {
        super();
        (this.tag as HTMLInputElement).type = "range";
    }
}

export default InputReange;