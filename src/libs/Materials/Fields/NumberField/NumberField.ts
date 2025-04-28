import Field from "../Field";
import InputNumber from "../../../ui/Tags/Input/InputNumber/InputNumber";

class NumberField extends Field {
    
    constructor(text: string = "", name: string = "", placeholder: string = "") {
        super(text, name, placeholder);

        this.input = new InputNumber();
        this.holder.add(this.input);

        this.loadStyles();
    }

}

export default NumberField;