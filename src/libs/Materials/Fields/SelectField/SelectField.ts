import Field from "../Field";
import Select from "../../../ui/Tags/Input/Select/Select";
import Option from "../../../ui/Tags/Input/Select/Option/Option";

class SelectField extends Field {
    private options: Array<Option> = new Array();

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

    public setOptions(options: Array<Option>) {
        this.options = options;
        (this.input as Select).setOptions(this.options);
    }

    addOption(option: Option) {
        this.options.push(option);
        (this.input as Select).setOptions(this.options);
    }

    addOptions(options: Array<Option>) {
        for (let option of options) {
            this.options.push(option);
        }
        (this.input as Select).setOptions(this.options);
    }
}

export default SelectField;