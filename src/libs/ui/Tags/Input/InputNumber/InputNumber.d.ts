import InputTyped from "../InputTyped/InputTyped";

declare class InputNumber extends InputTyped {
    constructor();
    
    public setMin(min: number): void;

    public setMax(max: number): void;

    public setStep(step: number): void;

    public setSpinButton(spinButton: boolean): void;
}

export default InputNumber;