import Input from "../Input/Input";

declare class InputNumber extends Input {
    constructor();
    
    public setMin(min: number): void;

    public setMax(max: number): void;

    public setStep(step: number): void;

    public setSpinButton(spinButton: boolean): void;
}

export default InputNumber;