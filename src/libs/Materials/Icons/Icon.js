import Svg from "../../ui/Tags/Svg/Svg.js";
import Tag from "../../ui/Tags/Tag.js";
import AlignItems from "../../ui/Types/AlignItems.js";
import Display from "../../ui/Types/Display.js";
import JustifyContent from "../../ui/Types/JustifyContent.js";
import Measure from "../../ui/Types/Measure.js";
 
class Icon extends Tag {
    icon;

    constructor(icon = null) {
        super("i");

        this.setDisplay(Display.FLEX);
        this.setJustifyContent(JustifyContent.CENTER);
        this.setAlignContent(AlignItems.CENTER);

        if (icon) {
            this.setIcon(icon);
        }
    }

    setIcon(icon) {
        this.icon = icon();
        this.icon.setSize(100, Measure.PERCENT);
        this.add(this.icon);
    }

    setSize(size, measure="") {
        this.icon.setSize(size, measure);
    }

    setIconColor(iconColor) {
        this.icon.setFill(iconColor);
    }
}

export default Icon;