import InputTyped from "../InputTyped/InputTyped";

class InputSearch extends InputTyped {
    constructor() {
        super();
        (this.tag as HTMLInputElement).type = "search";
    }
}

export default InputSearch;