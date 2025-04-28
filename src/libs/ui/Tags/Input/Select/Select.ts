import Tag from "../../Tag";
import Option from "./Option/Option";

class Select extends Tag {
    private options: Array<Option> = new Array();

    constructor(options: Array<Option> = []) {
        super("select");
        this.options = options;
        this.setOptions(this.options);
    }

    public setOptions(options: Array<Option>) {
        this.options = options;
        this.loadOptions();
    }

    public addOptions(options: Array<Option>) {
        for(let option in options) {
            this.options.push(option as unknown as Option);
        }
        this.loadOptions();
    }

    public addOption(option: Option) {
        this.options.push(option);
        this.loadOptions();
    }

    public setOutline(outline: string) {
        this.tag.style.outline = outline;
    }

    public onFocusIn(focusIn: () => any) {
        this.tag.addEventListener("focus", focusIn);
    }

    public onFocusOut(focusOut: () => any) {
        this.tag.addEventListener("focusout", focusOut);
    }

    public getValue() {
        return (this.tag as HTMLSelectElement).value;
    }

    public loadOptions() {
        if (this.options.length > 0 &&  this.tag.childNodes.length > 0) {
            for (let child of this.tag.children) {
                child.remove();
            }
        }
        for (let option of this.options) {
            this.tag.appendChild(option.load());
        }
    }

    public onChange(change: () => any) {
        this.tag.addEventListener("change", change);
    }
}

export default Select;