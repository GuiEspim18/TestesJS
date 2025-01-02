import Div from "../../../ui/Tags/Div/Div.js";
import InputText from "../../../ui/Tags/Input/InputText/InputText.js";
import BoxSizing from "../../../ui/Types/BoxSizing.js";
import Display from "../../../ui/Types/Display.js";
import Measure from "../../../ui/Types/Measure.js";
import Text from "../../Texts/Text/Text.js";
import Field from "../Field.js";

class TextField extends Field {

    constructor(text = "", name = "", placeholder = "") {
        super(text, name, placeholder);

        this.input = new InputText();
        this.holder.add(this.input);

        this.loadStyles();

    }

}

export default TextField;