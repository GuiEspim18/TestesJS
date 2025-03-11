import Input from "../Input";

class InputBinary extends Input {
    setChecked(checked: boolean) {
        (this.tag as HTMLInputElement).checked = checked;
    }

    isChecked() {
        return (this.tag as HTMLInputElement).checked;
    }
}

export default InputBinary;
