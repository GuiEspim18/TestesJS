import Tag from "../../../Tag";
import P from "../../../Text/P/P";

class Option extends Tag {
    private text: Tag;

    constructor(value: string = "", text: string = "") {
        super("option");
        if (value.length > 0) {
            this.tag.setAttribute("value", value);
        }
        if (text.length > 0) {
            this.text = new P(text);
            this.add(this.text);
        }
    }

    setValue(value: string) {
        this.tag.setAttribute("value", value);
    }

    setText(text: string) {
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