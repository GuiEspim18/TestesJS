import Tag from "../Tag.js";

class Input extends Tag {

    constructor() {
        super("input");
    }

    setReadOnly(readOnly) {
        this.tag.readOnly = readOnly;
    }

    setDisabled(disabled) {
        this.tag.disabled = disabled;
    }

    setRequired(required) {
        this.tag.required = required;
    }

    setAutofocus(autofocus) {
        this.tag.autofocus = autofocus;
    }

    setPattern(pattern) {
        this.tag.pattern = pattern; 
    }

    setOutline(outline) {
        this.tag.style.outline = outline;
    }

}

export default Input;