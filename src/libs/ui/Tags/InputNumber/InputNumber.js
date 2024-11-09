import Tag from "../Tag.js";

class InputNumber extends Tag {
    constructor() {
        super("input");
        this.tag.type = "number";
    }
}

export default InputNumber;