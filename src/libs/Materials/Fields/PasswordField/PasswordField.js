import Field from "../Field";
import InputPassword from "../../../ui/Tags/Input/InputPassword/InputPassword.js";

class PasswordField extends Field {

    constructor(text = "", name = "", placeholder = "") {
        super(text, name, placeholder);

        this.input = new InputPassword();
        this.holder.add(this.input);

        this.loadStyles();
    }

}

export default PasswordField;