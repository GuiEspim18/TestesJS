import Tag from "../../Tag.js";

class Select extends Tag {
    options = new Array();

    constructor(options = []) {
        super("select");
        this.options = options;
        this.setOptions(this.options);
    }

    setOptions(options) {
        this.options = options;
        this.loadOptions();
    }

    addOptions(options) {
        for(let option in options) {
            this.options.push(option);
        }
        this.loadOptions();
    }

    addOption(option) {
        this.options.push(option);
        this.loadOptions();
    }

    setOutline(outline) {
        this.tag.style.outline = outline;
    }

    onFocusIn(focusIn) {
        this.tag.addEventListener("focus", focusIn);
    }

    onFocusOut(focusOut) {
        this.tag.addEventListener("focusout", focusOut);
    }

    getValue() {
        return this.tag.value;
    }

    loadOptions() {
        if (this.options.length > 0 &&  this.tag.childNodes.length > 0) {
            for (let child of this.tag.children) {
                child.remove();
            }
        }
        for (let option of this.options) {
            this.tag.appendChild(option);
        }
    }
}

export default Select;