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

    setFocus() {
        this.tag.focus();
    }

    getValue() {
        return this.tag.value;
    }

    onFocusIn(focusIn) {
        this.tag.addEventListener("focus", focusIn);
    }

    onFocusOut(focusOut) {
        this.tag.addEventListener("focusout", focusOut);
    }

}

export default Input;