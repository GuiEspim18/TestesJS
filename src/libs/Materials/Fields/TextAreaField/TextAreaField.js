import TextArea from "../../../ui/Tags/Input/TextArea/TextArea.js";
import Field from "../Field.js";

class TextAreaField extends Field {
    constructor(text = "", name = "", placeholder = "") {
        super(text, name, placeholder);

        this.input = new TextArea();
        this.holder.add(this.input);

        this.loadStyles();
    }
}

export default TextAreaField;