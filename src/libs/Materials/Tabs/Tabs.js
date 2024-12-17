import Div from "../../ui/Tags/Div/Div.js";
import BoxSizing from "../../ui/Types/BoxSizing.js";
import Display from "../../ui/Types/Display.js";
import JustifyContent from "../../ui/Types/JustifyContent.js";

class Tabs extends Div {

    holder;
    tabsHolder;
    tabsList = [];

    constructor(tabs = [], pages = []) {
        super();

        this.tabsHolder = new Div();
        this.tabsHolder.setDisplay(Display.FLEX);
        this.tabsHolder.setPaddingHorizontal(10);
        this.tabsHolder.setBoxSizing(BoxSizing.BORDER_BOX);
        this.tabsHolder.setPaddingTop(5);
        this.add(this.tabsHolder);

        this.holder = new Div();
        this.add(this.holder);

        if (tabs.length > 0) {
            this.setTabs(tabs);
        } 

        if (pages.length > 0) {

        }
        
    }

    setTabs(tabs) {
        this.tabsList = tabs;
        for (let tab of tabs) {
            this.tabsHolder.add(tab);
        }
    }

}

export default Tabs;