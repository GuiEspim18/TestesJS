import Input from "../Input/Input.js";

class InputNumber extends Input {
    constructor() {
        super("input");
        this.tag.type = "number";
    }

    setMin(min) {
        this.tag.min = min;
    }

    setMax(max) {
        this.tag.max = max;
    }

    setStep(step) {
        this.tag.step = step;
    }
}

export default InputNumber;