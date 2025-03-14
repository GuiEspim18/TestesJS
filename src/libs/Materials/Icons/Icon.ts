import Svg from "../../ui/Tags/Svg/Svg";
import Tag from "../../ui/Tags/Tag";
import AlignItems from "../../ui/Types/AlignItems";
import Display from "../../ui/Types/Display";
import JustifyContent from "../../ui/Types/JustifyContent";
import Measure from "../../ui/Types/Measure";
import { TSize } from "../../ui/Types/SizeType";

class Icon extends Tag {
    private icon: Svg;

    constructor(icon?: () => Svg) {
        super("i");

        this.setDisplay(Display.FLEX);
        this.setJustifyContent(JustifyContent.CENTER);
        this.setAlignContent(AlignItems.CENTER);

        if (icon) {
            this.setIcon(icon);
        }
    }

    setIcon(icon: () => Svg) {
        this.icon = icon();
        this.icon.setSize({ value: 100, measure: Measure.PERCENT});
        this.add(this.icon);
    }

    setIconColor(iconColor: string) {
        this.icon.setFill(iconColor);
    }
}

export default Icon;