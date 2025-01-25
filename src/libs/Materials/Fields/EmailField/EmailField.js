import Field from "../Field.js";

class EmailField extends Field {
    constructor(text = "", name = "", placeholder = "") {
        super(text, name, placeholder);
    }
}

export default EmailField;