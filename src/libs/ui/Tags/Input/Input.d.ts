import Tag from "../Tag";

declare class Input extends Tag {
    constructor();
    
    public setReadOnly(readOnly: boolean): void;

    public setDisabled(disabled: boolean): void;

    public setRequired(required: boolean): void;

    public setAutofocus(autofocus: boolean): void;

    public setAutocomplete(autocomplete: string): void;

    public setPattern(pattern: string): void;

    public setPlaceholder(placeholder: string): void;

    public setValue(value: any): void;

    public setOutline(outline: string): void;
}

export default Input;