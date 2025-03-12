import Tag from "../../Tag";
import Option from "./Option/Option";

class Select extends Tag {
    private options: Array<Option> = new Array();

    constructor(options: Array<Option> = []) {
        super("select");
        this.options = options;
        this.setOptions(this.options);
    }

    setOptions(options: Array<Option>) {
        this.options = options;
        this.loadOptions();
    }

    addOptions(options: Array<Option>) {
        for(let option in options) {
            this.options.push(option as unknown as Option);
        }
        this.loadOptions();
    }

    addOption(option: Option) {
        this.options.push(option);
        this.loadOptions();
    }

    setOutline(outline: string) {
        this.tag.style.outline = outline;
    }

    onFocusIn(focusIn: () => any) {
        this.tag.addEventListener("focus", focusIn);
    }

    onFocusOut(focusOut: () => any) {
        this.tag.addEventListener("focusout", focusOut);
    }

    getValue() {
        return (this.tag as HTMLSelectElement).value;
    }

    loadOptions() {
        if (this.options.length > 0 &&  this.tag.childNodes.length > 0) {
            for (let child of this.tag.children) {
                child.remove();
            }
        }
        for (let option of this.options) {
            this.tag.appendChild(option.load());
        }
    }
}

export default Select;