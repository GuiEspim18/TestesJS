import InputFile from "../../../ui/Tags/Input/InputFile/InputFile.js";
import Display from "../../../ui/Types/Display.js";
import Field from "../Field.js";
import Cursor from "../../../../libs/ui/Types/Cursor.js";
import BackgroundSize from "../../../ui/Types/BackgroundSize.js";
import Icons from "../../Icons/Icons.js";
import Icon from "../../Icons/Icon.js";
import JustifyContent from "../../../ui/Types/JustifyContent.js";
import P from "../../../ui/Tags/Text/P/P.js";
import Div from "../../../ui/Tags/Div/Div.js";
import FlexDirection from "../../../ui/Types/FlexDirection.js";
import AlignItems from "../../../ui/Types/AlignItems.js";
import BackgroundPosition from "../../../ui/Types/BackgroundPosition.js";

class ImageField extends Field {
    p = new P("Selecione uma image");
    icon = new Icon(Icons.CAMERA);

    constructor(text = "", name = "") {
        super(text, name);

        this.input = new InputFile();
        this.holder.add(this.input);

        const div = new Div();
        div.setDisplay(Display.FLEX);
        div.setFlexDirection(FlexDirection.COLUMN);
        div.setJustifyContent(JustifyContent.CENTER);
        div.setAlignItems(AlignItems.CENTER);

        this.holder.onClick(() => {
            this.selectFile(this.holder, div);
        });

        this.icon.setIconColor("#cecece");
        div.add(this.icon);

        this.p.setFontColor("#cecece")
        div.add(this.p);

        this.holder.add(div);

        this.loadStyles();

        this.holder.setSize(300);
        this.input.setDisplay(Display.NONE);
        this.holder.setCursor(Cursor.POINTER);
        this.holder.setBackgroundSize(BackgroundSize.COVER);
        this.holder.setJustifyContent(JustifyContent.CENTER);
        this.holder.setBackgroundPosition(BackgroundPosition.CENTER)
    }

    selectFile(background, div) {
        this.focus();
        this.input.click();
        this.input.onChange(() => {
            this.exitFocus();
            this.value = this.input.getFiles();
            if (this.value && this.value[0]) {
                const reader = new FileReader();
                reader.onloadend = function () {
                    div.setDisplay(Display.NONE);
                    background.setBackgroundImage(reader.result);
                }

                if (this.value) {
                    reader.readAsDataURL(this.value[0]);
                }
            }
            
            if (this.input.getFiles().length == 0) {
                this.exitFocus();
            }
        });
    }
}

export default ImageField;