import { read } from "fs";
import Tag from "../Tag";

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

}

export default Input;