import Field from "../Field";
import InputEmail from "../../../ui/Tags/Input/InputEmail/InputEmail";
import FieldType from "../FieldType";

class EmailField extends Field {

    constructor(text = "", name = "", placeholder = "") {
        super(text, name, placeholder);

        this.type = FieldType.EMAIL;

        this.input = new InputEmail();
        this.holder.add(this.input);

        this.loadStyles();
    }
}

export default EmailField;