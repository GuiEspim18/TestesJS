import Tag from "../../Tag.js";

class TextArea extends Tag {

    sizeChange = () => 0;

    constructor() {
        super("textarea");

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type == "attributes") {
                    this.sizeChange();
                }
            });
        });

        observer.observe(this.tag, {
            attributes: true,
            attributeFilter: ["style"]
        });
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

    onSizeChange(sizeChange) {
        this.sizeChange = sizeChange;
    }

    setCols(cols) {
        this.tag.setAttribute("cols", String(cols));
    }

    setRows(rows) {
        this.tag.setAttribute("rows", String(rows));
    }

    setResize(resize) {
        this.tag.style.resize = resize;
    }
}

export default TextArea;