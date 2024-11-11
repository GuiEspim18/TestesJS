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

    setAutocomplete(autocomplete) {
        this.tag.autocomplete = autocomplete;
    }

    setPattern(pattern) {
        this.tag.pattern = pattern; 
    }

    setPlaceholder(placeholder) {
        this.tag.placeholder = placeholder
    }

    setValue(value) {
        this.tag.value = value;
    }

    setOutline(outline) {
        this.tag.style.outline = outline;
    }

}

export default Input;