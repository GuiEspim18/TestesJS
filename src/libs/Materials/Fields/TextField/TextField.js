import InputText from "../../../ui/Tags/Input/InputText/InputText.js";
import Field from "../Field.js";
import FieldType from "../FieldType.js";

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