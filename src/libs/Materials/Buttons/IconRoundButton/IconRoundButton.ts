import Svg from "../../../ui/Tags/Svg/Svg";
import AlignItems from "../../../ui/Types/AlignItems";
import Display from "../../../ui/Types/Display";
import JustifyContent from "../../../ui/Types/JustifyContent";
import Icon from "../../Icons/Icon";
import DefaultButton from "../DefaultButton/DefaultButton";

class IconRoundButton extends DefaultButton {

    private icon: Icon;

    constructor(icon?: () => Svg) {
        super();
        this.setDisplay(Display.FLEX);
        this.setAlignItems(AlignItems.CENTER);
        this.setJustifyContent(JustifyContent.CENTER);
        this.setWidth(30);
        this.setHeight(30);
        this.setBorderRadius({ value: 30 });
        this.setBackgroundColor("#00000040");

        if (icon) {
            this.icon = new Icon(icon);
            this.add(this.icon);
        }

    }

    setIcon(icon: () => Svg) {
        if (this.icon) {
            this.removeAll();
        }
        this.icon = new Icon(icon);
        this.add(this.icon);
    }

    setIconColor(color: string) {
        this.icon.setIconColor(color);
    }

}

export default IconRoundButton;