import Tag from "../../Tag";

class TextArea extends Tag {

    private sizeChange = (): number => 0;

    constructor() {
        super("textarea");

        const observer = new MutationObserver((mutations: MutationRecord[]) => {
            mutations.forEach((mutation: MutationRecord) => {
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

    setReadOnly(readOnly: boolean) {
        (this.tag as HTMLTextAreaElement).readOnly = readOnly;
    }

    setDisabled(disabled: boolean) {
        (this.tag as HTMLTextAreaElement).disabled = disabled;
    }

    setRequired(required: boolean) {
        (this.tag as HTMLTextAreaElement).required = required;
    }

    setAutofocus(autofocus: boolean) {
        this.tag.autofocus = autofocus;
    }

    setOutline(outline: string) {
        this.tag.style.outline = outline;
    }

    setFocus() {
        this.tag.focus();
    }

    getValue() {
        return (this.tag as HTMLTextAreaElement).value;
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

    onSizeChange(sizeChange: () => any) {
        this.sizeChange = sizeChange;
    }

    setCols(cols: number) {
        this.tag.setAttribute("cols", String(cols));
    }

    setRows(rows: number) {
        this.tag.setAttribute("rows", String(rows));
    }

    setResize(resize: string) {
        this.tag.style.resize = resize;
    }
}

export default TextArea;