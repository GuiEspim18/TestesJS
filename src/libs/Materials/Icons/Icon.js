import Svg from "../../ui/Tags/Svg/Svg.js";
import Tag from "../../ui/Tags/Tag.js";
 
class Icon extends Tag {
    icon;

    constructor(icon = null) {
        super("i");
        if (icon) {
            this.setIcon(icon);
        }
    }

    setIcon(icon) {
        this.icon = icon();
        this.add(this.icon);
    }

    setIconColor(iconColor) {
        this.icon.setFill(iconColor);
    }
}

export default Icon;