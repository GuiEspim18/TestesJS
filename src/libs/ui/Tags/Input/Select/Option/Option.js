import Tag from "../../../Tag.js";
import P from "../../../Text/P/P.js";

class Option extends Tag {
    text = null;

    constructor(value = null, text = "") {
        super("option");
        if (value.length > 0) {
            this.tag.setAttribute("value", value);
        }
        if (text.length > 0) {
            this.text = new P(text);
            this.tag.add(this.text);
        }
    }

    setValue(value) {
        this.tag.setAttribute("value", value);
    }

    setText(text) {
        if (text != null) {
            this.remove(this.text);
            this.text = new P(text);
            this.add(this.text);
        } else {
            this.text = new P(text);
            this.add(this.text);
        }
    }

}

export default Option;