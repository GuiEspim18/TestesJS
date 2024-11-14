import Input from "../Input.js";

class InputImage extends Input {
    constructor() {
        super();
        this.tag.type = "image";
    }

    setImage(image) {
        this.tag.src = image;
    }

    setValue(value) {
        this.tag.value = value;
    }
}

export default InputImage;