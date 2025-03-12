import Input from "../Input";

class InputReset extends Input {
    constructor() {
        super();
        (this.tag as HTMLInputElement).type = "reset";
    }

    setValue(value: string) {
        (this.tag as HTMLInputElement).value = value;
    }
}

export default InputReset;