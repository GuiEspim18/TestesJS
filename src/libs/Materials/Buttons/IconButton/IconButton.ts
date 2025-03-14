import Div from "../../../ui/Tags/Div/Div";
import Svg from "../../../ui/Tags/Svg/Svg";
import Tag from "../../../ui/Tags/Tag";
import P from "../../../ui/Tags/Text/P/P";
import AlignItems from "../../../ui/Types/AlignItems";
import Display from "../../../ui/Types/Display";
import JustifyContent from "../../../ui/Types/JustifyContent";
import Icon from "../../Icons/Icon";
import DefaultButton from "../DefaultButton/DefaultButton";

class IconButton extends DefaultButton {

    private divIcon: Div;
    private textBtn: P;
    private icon: Icon;

    constructor(text = "", icon?: () => Svg) {
        super();
        this.setDisplay(Display.FLEX);
        this.setAlignItems(AlignItems.CENTER);
        this.setJustifyContent(JustifyContent.CENTER);

        this.divIcon = new Div();
        this.divIcon.setMarginRight({ value: 10 });
        this.add(this.divIcon);

        if (icon != null) {
            this.icon = new Icon(icon);
            this.icon.setIconColor("#f0f0f0");
            this.icon.setSize(20);
            this.divIcon.add(this.icon);
        }

        if (text.length > 0) {
            this.textBtn = new P(text);
            this.textBtn.setMargin({ value: 0 });
            this.add(this.textBtn);
        }

    }

    setIcon(icon: () => Svg) {
        this.icon = new Icon(icon);
        this.icon.setIconColor("#f0f0f0");
        this.icon.setSize(20);
        this.divIcon.add(this.icon);
    }
    
    setColor(color: string) {
        this.textBtn.setFontColor(color);
        this.icon.setIconColor(color);
    }
}

export default IconButton;