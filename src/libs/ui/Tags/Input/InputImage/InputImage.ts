import Input from "../Input";

class InputImage extends Input {
    constructor() {
        super();
        (this.tag as HTMLInputElement).type = "image";
    }

    setImage(image: string) {
        (this.tag as HTMLInputElement).src = image;
    }

    setValue(value: string) {
        (this.tag as HTMLInputElement).value = value;
    }
}

export default InputImage;