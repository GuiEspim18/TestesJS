import TextArea from "../../../ui/Tags/Input/TextArea/TextArea.js";
import BoxSizing from "../../../ui/Types/BoxSizing.js";
import Field from "../Field.js";

class TextAreaField extends Field {
    constructor(text = "", name = "", placeholder = "") {
        super(text, name, placeholder);

        this.input = new TextArea();
        this.input.onSizeChange(() => {
            this.holder.setHeight(this.input.tag.clientHeight);
        });
        this.holder.add(this.input);
        
        this.loadStyles();
        this.input.setResize("vertical")
        this.input.setPadding(10);
        this.holder.setHeight(70)
        this.holder.setPaddingVertical(15);
        this.holder.setBoxSizing(BoxSizing.BORDER_BOX);
        // this.holder.setOverflow("hidden");
        // this.input.setPosition("absolute");
    }
}

export default TextAreaField;