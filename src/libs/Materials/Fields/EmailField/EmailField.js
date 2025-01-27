import Field from "../Field.js";

class EmailField extends Field {
    constructor(text = "", name = "", placeholder = "") {
        super(text, name, placeholder);

        this.input = new InputNumber();
        this.holder.add(this.input);
    }
}

export default EmailField;