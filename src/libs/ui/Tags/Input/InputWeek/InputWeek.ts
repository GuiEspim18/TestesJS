import Input from "../Input";

class InputWeek extends Input {
    constructor() {
        super();
        (this.tag as HTMLInputElement).type = "week";
    }
}

export default InputWeek;