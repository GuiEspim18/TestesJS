import Field from "../Field.js";

class SelectField extends Field {
    constructor(text = "", name = "", placeholder = "") {
        super(text, name, placeholder);
    }
}

export default SelectField;