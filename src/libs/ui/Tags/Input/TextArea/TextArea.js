import Tag from "../../Tag.js";

class TextArea extends Tag {
    constructor() {
        super("textarea");
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

    setType(type) {
        this.tag.type = type;
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

    onChange(change) {
        this.tag.addEventListener("change", change);
    }
}

export default TextArea;