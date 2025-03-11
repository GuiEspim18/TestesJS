import Tag from "../Tag";

class Input extends Tag {

    constructor() {
        super("input");
    }

    setReadOnly(readOnly: boolean) {
        (this.tag as HTMLInputElement).readOnly = readOnly;
    }

    setDisabled(disabled: boolean) {
        (this.tag as HTMLInputElement).disabled = disabled;
    }

    setRequired(required: boolean) {
        (this.tag as HTMLInputElement).required = required;
    }

    setAutofocus(autofocus: boolean) {
        (this.tag as HTMLInputElement).autofocus = autofocus;
    }

    setPattern(pattern: string) {
        (this.tag as HTMLInputElement).pattern = pattern; 
    }

    setOutline(outline: string) {
        (this.tag as HTMLInputElement).style.outline = outline;
    }

    setType(type: string) {
        (this.tag as HTMLInputElement).type = type;
    }

    setFocus() {
        this.tag.focus();
    }

    getValue() {
        return  (this.tag as HTMLInputElement).value;
    }

    onFocusIn(focusIn: () => any) {
        this.tag.addEventListener("focus", focusIn);
    }

    onFocusOut(focusOut: () => any) {
        this.tag.addEventListener("focusout", focusOut);
    }

    onChange(change: () => any) {
        this.tag.addEventListener("change", change);
    }

}

export default Input;