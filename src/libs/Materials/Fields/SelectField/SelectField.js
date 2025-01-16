import Field from "../Field.js";
import Select from "../../../ui/Tags/Input/Select/Select.js";

class SelectField extends Field {
    options = new Array();

    constructor(text = "", name = "", placeholder = "") {
        super(text, name, placeholder);

        this.input = new Select();
        this.holder.add(this.input);

        this.loadStyles();
    }

    setOptions(options) {
        this.options = options;
        this.input.setOptions(this.options);
    }

    addOption(option) {
        this.options.push(option);
        this.input.setOptions(this.options);
    }
}

export default SelectField;