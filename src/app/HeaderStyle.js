import Header from "../libs/ui/Tags/Header/Header.js";
import Measure from "../libs/ui/Types/Measure.js";
import Display from "../libs/ui/Types/Display.js";
import AlignContent from "../libs/ui/Types/AlignContent.js";
import HeaderTitle from "./HeaderTitle.js";

class HeaderStyle extends Header {
    constructor () {
        super();
        this.setWidth(100, Measure.PERCENT);
        this.setHeight(80);
        this.setBackgroundColor("#7B68EE");
        this.setDisplay(Display.FLEX);
        this.setJustifyContent(AlignContent.CENTER)
        
        this.add(new HeaderTitle("Título"));  
    }
}

export default HeaderStyle;