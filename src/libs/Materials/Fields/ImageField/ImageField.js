import InputFile from "../../../ui/Tags/Input/InputFile/InputFile.js";
import Display from "../../../ui/Types/Display.js";
import Field from "../Field.js";

class ImageField extends Field {
    constructor(text = "", name = "") {
        super(text, name);

        this.input = new InputFile();
        this.holder.add(this.input);

        this.loadStyles();

        this.holder.setSize(300);
        this.input.setDisplay(Display.NONE);
    }
}

export default ImageField;