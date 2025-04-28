import TextArea from "../../../ui/Tags/Input/TextArea/TextArea";
import BoxSizing from "../../../ui/Types/BoxSizing";
import Resize from "../../../ui/Types/Resize";
import Field from "../Field";

class TextAreaField extends Field {
    constructor(text = "", name = "", placeholder = "") {
        super(text, name, placeholder);

        this.input = new TextArea();
        this.input.onSizeChange(() => {
            this.holder.setHeight(this.input.tag.clientHeight);
        });
        this.holder.add(this.input);
        
        this.loadStyles();
        this.input.setResize(Resize.VERTICAL)
        this.holder.setHeight(70)
        this.holder.setPaddingVertical({ value: 10 });
        this.holder.setBoxSizing(BoxSizing.BORDER_BOX);
    }
}

export default TextAreaField;