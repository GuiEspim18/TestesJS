import Field from "../Field.js";
import InputEmail from "../../../ui/Tags/Input/InputEmail/InputEmail.js";

class EmailField extends Field {
    constructor(text = "", name = "", placeholder = "") {
        super(text, name, placeholder);

        this.input = new InputEmail();
        this.holder.add(this.input);

        this.loadStyles();
    }
}

export default EmailField;