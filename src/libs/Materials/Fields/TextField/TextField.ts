import InputText from "../../../ui/Tags/Input/InputText/InputText";
import Field from "../Field";
import FieldType from "../FieldType";

class TextField extends Field {

    constructor(text = "", name = "", placeholder = "") {
        super(text, name, placeholder);

        this.type = FieldType.TEXT;

        this.input = new InputText();
        this.holder.add(this.input);

        this.loadStyles();

    }

}

export default TextField;