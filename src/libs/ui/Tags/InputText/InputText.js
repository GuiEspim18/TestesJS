import Tag from "../Tag.js";

class InputText extends Tag {
    constructor() {
        super("input");
        this.tag.type = "number";
    }
}

export default InputText;