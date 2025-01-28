import InputTextArea from "../../../ui/Tags/Input/InputTextArea/InputTextArea.js";
import Field from "../Field.js";

class TextAreaField extends Field {
    constructor(text = "", name = "", placeholder = "") {
        super(text, name, placeholder);

        this.input = new InputTextArea();
    }
}

export default TextAreaField;