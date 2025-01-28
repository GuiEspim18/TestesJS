import Field from "../Field.js";

class TextAreaField extends Field {
    constructor(text = "", name = "", placeholder = "") {
        super(text, name, placeholder);
    }
}

export default TextAreaField;