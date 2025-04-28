import Field from "../Field.js";
import InputPassword from "../../../ui/Tags/Input/InputPassword/InputPassword.js";
import IconRoundButton from "../../Buttons/IconRoundButton/IconRoundButton.js";
import Icons from "../../Icons/Icons.js";
import Tag from "../../../ui/Tags/Tag.js";

class PasswordField extends Field {

    private visibility: boolean = false;
    private btn: IconRoundButton;

    constructor(text = "", name = "", placeholder = "") {
        super(text, name, placeholder);

        this.input = new InputPassword();
        this.holder.add(this.input);

        this.btn = new IconRoundButton(Icons.EYE_SLASHED_FILLED);
        this.btn.setBackgroundColor("transparent");
        this.btn.onClick((e) => this.changeVisibility(e));
        this.holder.add(this.btn);

        this.loadStyles();
    }

    private changeVisibility(event: Event) {
        event.stopPropagation();
        this.visibility = !this.visibility;
        if (this.visibility) {
            this.btn.setIcon(Icons.EYE_FILLED);
            this.input.setType("text");
        } else {
            this.btn.setIcon(Icons.EYE_SLASHED_FILLED);
            this.input.setType("password");
        }
    }

}

export default PasswordField;