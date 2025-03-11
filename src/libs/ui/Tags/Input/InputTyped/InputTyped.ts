import Input from "../Input";

class InputTyped extends Input {

    setPlaceholder(placeholder: string) {
        (this.tag as HTMLInputElement).placeholder = placeholder
    }

    setValue(value: string) {
        (this.tag as HTMLInputElement).value = value;
    }

    setAutocomplete(autocomplete: AutoFill) {
        (this.tag as HTMLInputElement).autocomplete = autocomplete;
    }
}

export default InputTyped;