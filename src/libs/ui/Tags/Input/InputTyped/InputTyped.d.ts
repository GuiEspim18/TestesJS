import Input from "../Input";

declare class InputTyped extends Input {

    public setPlaceholder(placeholder: string): void;

    public setValue(value: any): void;

    public setAutocomplete(autocomplete: string): void;
    
}

export default InputTyped;