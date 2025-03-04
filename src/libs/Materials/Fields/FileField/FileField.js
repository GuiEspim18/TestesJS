import Field from "../Field.js";
import InputFile from "../../../ui/Tags/Input/InputFile/InputFile.js";
import Display from "../../../ui/Types/Display.js";
import DefaultButton from "../../Buttons/DefaultButton/DefaultButton.js";
import Measure from "../../../ui/Types/Measure.js";
import P from "../../../ui/Tags/Text/P/P.js";
import FontWeight from "../../../ui/Types/FontWeight.js";

class FileField extends Field {
    button = new DefaultButton();
    text = new P();
    value = null;

    constructor(text = "", name = "") {
        super(text, name);

        this.input = new InputFile();
        this.holder.add(this.input);

        this.button = new DefaultButton("Selecionar Arquivo");
        this.button.setWidth(40, Measure.PERCENT);
        this.button.setHeight(25);
        this.holder.add(this.button);
        this.button.onClick(() => this.selectFile());

        this.text = new P("");
        this.text.setFontWeight(FontWeight.LIGHTER);
        this.text.setMargin(0);
        this.text.setMarginLeft(10);
        this.holder.add(this.text);

        this.loadStyles();
        this.input.setDisplay(Display.NONE);
        this.holder.setPadding(2);
        
    }

    selectFile () {
        this.input.click();
        this.input.onChange(() => {
            if (this.input.getFiles().length > 0) {
                this.value = this.input.getFiles();
                this.text.setText(this.input.getFiles()[0].name);
            }
        });
    }
}

export default FileField;