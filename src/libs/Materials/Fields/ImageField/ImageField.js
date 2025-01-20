import InputFile from "../../../ui/Tags/Input/InputFile/InputFile.js";
import Display from "../../../ui/Types/Display.js";
import Field from "../Field.js";
import Cursor from "../../../../libs/ui/Types/Cursor.js";

class ImageField extends Field {
    constructor(text = "", name = "") {
        super(text, name);

        this.input = new InputFile();
        this.holder.add(this.input);
        this.holder.onClick(() => this.selectFile(this.holder));

        this.loadStyles();

        this.holder.setSize(300);
        this.input.setDisplay(Display.NONE);
        this.holder.setCursor(Cursor.POINTER);
    }

    selectFile(background) {
        this.focus();
        this.input.click();
        this.input.onChange(() => {
            this.exitFocus();
            this.value = this.input.getFiles();
            if (this.value && this.value[0]) {
                const reader = new FileReader();
                reader.onloadend = function () {
                    background.setBackgroundImage(reader.result);
                    if (this.holder) {
                    }
                }

                if (this.value) {
                    reader.readAsDataURL(this.value[0]);
                }

            }
        });
    }
}

export default ImageField;