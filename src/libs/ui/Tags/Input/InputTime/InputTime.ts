import InputTyped from "../InputTyped/InputTyped";

class InputTime extends InputTyped {
    constructor() {
        super();
        (this.tag as HTMLInputElement).type = "time";
    }
}

export default InputTime;