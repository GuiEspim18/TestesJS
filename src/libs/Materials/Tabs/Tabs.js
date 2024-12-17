import Div from "../../ui/Tags/Div/Div.js";
import BoxSizing from "../../ui/Types/BoxSizing.js";
import Display from "../../ui/Types/Display.js";

class Tabs extends Div {

    holder;
    tabsHolder;
    tabsList = [];

    constructor(tabs = []) {
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
        
    }

    setTabs(tabs) {
        this.tabsList = tabs;
        this.loadTabs();
    }

    getTabs() {
        return this.tabsList;
    }

    setPage(page) {
        this.holder.removeAll();
        this.holder.add(page);
    }

    addTabs(tabs) {
        for (let tab of tabs) {
            this.tabsList.push(tab);
        }
        this.loadTabs();
    }

    addTab(tab) {
        this.tabsList.push(tab);
        this.loadTabs();
    }

    loadTabs() {
        this.tabsList[0].setSelected(true);
        this.holder.add(this.tabsList[0].getPage());
        this.tabsHolder.removeAll();
        for (let tab of this.tabsList) {
            this.tabsHolder.add(tab);
            tab.setParent(this);
        }
    }

}

export default Tabs;