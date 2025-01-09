import Field from "../Field.js";
import InputNumber from "../../../ui/Tags/Input/InputNumber/InputNumber.js";

class NumberField extends Field {
    
    constructor(text = "", name = "", placeholder = "") {
        super(text, name, placeholder);

        this.input = new InputNumber();
        this.holder.add(this.input);

        this.loadStyles();
    }

}

export default NumberField;