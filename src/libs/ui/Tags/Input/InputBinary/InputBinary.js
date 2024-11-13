import Input from "../Input";

class InputBinary extends Input {
    setChecked(checked) {
        this.tag.checked = checked;
    }

    isChecked() {
        return this.tag.checked;
    }
}

export default InputBinary;
