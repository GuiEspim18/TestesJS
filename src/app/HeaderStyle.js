import Component from "../libs/ui/Component/Component.js";
import Header from "../libs/ui/Tags/Header/Header.js";
import Measure from "../libs/ui/Types/Measure.js";
import Display from "../libs/ui/Types/Display.js";
import AlignContent from "../libs/ui/Types/AlignContent.js";
import HeaderTitle from "./HeaderTitle.js";

class HeaderStyle extends Component {
    constructor () {
        super();
        this.header = new Header();
        this.header.setWidth(100, Measure.PERCENT);
        this.header.setHeight(80);
        this.header.setBackgroundColor("#7B68EE");
        this.header.setDisplay(Display.FLEX);
        this.header.setJustifyContent(AlignContent.CENTER)
        
        this.header.add(new HeaderTitle("Título"));

        this.add(this.header);
  
    }

    applyHeaderStyle() {
        
    }
}

export default HeaderStyle;