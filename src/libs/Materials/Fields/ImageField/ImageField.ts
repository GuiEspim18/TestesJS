import InputFile from "../../../ui/Tags/Input/InputFile/InputFile";
import Display from "../../../ui/Types/Display";
import Field from "../Field";
import Cursor from "../../../../libs/ui/Types/Cursor";;
import Icons from "../../Icons/Icons";
import Icon from "../../Icons/Icon";
import JustifyContent from "../../../ui/Types/JustifyContent";
import P from "../../../ui/Tags/Text/P/P";
import Div from "../../../ui/Tags/Div/Div";
import FlexDirection from "../../../ui/Types/FlexDirection";
import AlignItems from "../../../ui/Types/AlignItems";
import BackgroundSize from "../../../ui/Types/BackgroundSize";
import BackgroundPosition from "../../../ui/Types/BackgroundPosition";
import Tag from "../../../ui/Tags/Tag";

class ImageField extends Field {
    private p: P = new P("Selecione uma image");
    private icon: Icon = new Icon(Icons.CAMERA);
    private value: FileList | null = null;

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

    private selectFile(background: Tag, div: Div) {
        this.focus();
        this.input.click();
        this.input.onChange(() => {
            this.exitFocus();
            const files: FileList | null = (this.input as InputFile).getFiles();
            this.value = files
            if (this.value && this.value[0]) {
                const reader = new FileReader();
                reader.onloadend = function () {
                    div.setDisplay(Display.NONE);
                    background.setBackgroundImage(reader.result as string);
                }

                if (this.value) {
                    reader.readAsDataURL(this.value[0]);
                }
            }
            
            if (files) {
                if (files.length == 0) {
                    this.exitFocus();
                }
            }
        });
    }
}

export default ImageField;