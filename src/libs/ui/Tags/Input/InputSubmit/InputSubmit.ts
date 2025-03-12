import Input from "../Input";

class InputSubmit extends Input {
    constructor() {
        super();
        (this.tag as HTMLInputElement).type = "submit";
    }

    setValue(value: string) {
        (this.tag as HTMLInputElement).value = value;
    }
    
}

export default InputSubmit;