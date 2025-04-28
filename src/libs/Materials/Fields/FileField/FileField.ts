import Field from "../Field";
import InputFile from "../../../ui/Tags/Input/InputFile/InputFile";
import Display from "../../../ui/Types/Display";
import DefaultButton from "../../Buttons/DefaultButton/DefaultButton";
import Measure from "../../../ui/Types/Measure";
import P from "../../../ui/Tags/Text/P/P";
import FontWeight from "../../../ui/Types/FontWeight";
import Tag from "../../../ui/Tags/Tag";

class FileField extends Field {
    private button = new DefaultButton();
    private text: Tag = new P();
    private value: FileList | null = null;

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
        this.text.setMargin({ value: 0 });
        this.text.setMarginLeft({ value: 10 });
        this.holder.add(this.text);

        this.loadStyles();
        this.input.setDisplay(Display.NONE);
        this.holder.setPadding({ value: 2 });
        
    }

    private selectFile () {
        this.input.click();
        this.input.onChange(() => {
            const files: FileList | null  = (this.input as InputFile).getFiles();
            if (files) {
                if (files.length > 0) {
                    this.value = files;
                    this.text.setText(files[0].name);
                }
            }
        });
    }
}

export default FileField;