import InputTyped from "../InputTyped/InputTyped.js";

class InputSearch extends InputTyped {
    constructor() {
        super();
        this.tag.type = "search";
    }
}

export default InputSearch;