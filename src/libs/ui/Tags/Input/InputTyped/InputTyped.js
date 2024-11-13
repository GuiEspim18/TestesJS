import Input from "../Input.js";

class InputTyped extends Input {

    setPlaceholder(placeholder) {
        this.tag.placeholder = placeholder
    }

    setValue(value) {
        this.tag.value = value;
    }

    setAutocomplete(autocomplete) {
        this.tag.autocomplete = autocomplete;
    }
}

export default InputTyped;