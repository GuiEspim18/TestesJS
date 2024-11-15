import Tag from "../../Tag.js";

class Select extends Tag {
    options = new Array();

    constructor(options = []) {
        super("select");
        this.options = options;
    }

    setOptions(options) {
        this.options = options;
    }

    addOption(option) {
        this.options.push(option);
    }

    getValue() {
        return this.tag.value;
    }

    loadOptions() {
        for (option of this.options) {
            this.add(option);
        }
    }
}

export default Select;