import Field from "../Field.js";
import Select from "../../../ui/Tags/Input/Select/Select.js";

class SelectField extends Field {
    options = new Array();

    constructor(text = "", name = "", options = new Array()) {
        super(text, name);

        this.input = new Select();
        this.holder.add(this.input);

        if (options.length > 0) {
            this.options = options;
            this.input.setOptions(options);
        }

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

    addOptions(options) {
        for (let option of options) {
            this.options.push(option);
        }
        this.input.setOptions(this.options);
    }
}

export default SelectField;