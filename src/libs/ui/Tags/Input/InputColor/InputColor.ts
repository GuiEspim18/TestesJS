import Input from "../Input";

class InputColor extends Input {
    constructor() {
        super();
        (this.tag as HTMLInputElement).type = "color";
    }
}

export default InputColor;