import Field from "../Field.js";

class EmailField extends Field {
    constructor(text = "", name = "", placeholder = "") {
        super(text, name, placeholder);

        this.input = new InputNumber();
    }
}

export default EmailField;