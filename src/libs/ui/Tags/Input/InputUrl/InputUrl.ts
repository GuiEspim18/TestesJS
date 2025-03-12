import Input from "../Input";

class InputUrl extends Input {
    constructor() {
        super();
        (this.tag as HTMLInputElement).type = "url";
    }
}

export default InputUrl;