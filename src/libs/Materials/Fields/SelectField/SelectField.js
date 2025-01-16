import Field from "../Field.js";
import Select from "../../../ui/Tags/Input/Select/Select.js";

class SelectField extends Field {
    constructor(text = "", name = "", placeholder = "") {
        super(text, name, placeholder);

        this.input = new Select();
        this.add(this.input);

        this.loadStyles();
    }
}

export default SelectField;