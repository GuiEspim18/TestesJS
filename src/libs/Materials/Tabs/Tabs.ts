import Div from "../../ui/Tags/Div/Div";
import Tag from "../../ui/Tags/Tag";
import BoxSizing from "../../ui/Types/BoxSizing";
import Display from "../../ui/Types/Display";
import TabButton from "../Buttons/TabButton/TabButton";

class Tabs extends Div {

    private holder: Tag;
    private tabsHolder;
    private tabsList: Array<TabButton> = [];

    constructor(tabs: Array<TabButton> = []) {
        super();

        this.tabsHolder = new Div();
        this.tabsHolder.setDisplay(Display.FLEX);
        this.tabsHolder.setPaddingHorizontal({ value: 10 });
        this.tabsHolder.setBoxSizing(BoxSizing.BORDER_BOX);
        this.tabsHolder.setPaddingTop({ value: 5 });
        this.add(this.tabsHolder);

        this.holder = new Div();
        this.add(this.holder);

        if (tabs.length > 0) {
            this.setTabs(tabs);
        } 
        
    }

    setTabs(tabs: Array<TabButton>) {
        this.tabsList = tabs;
        this.loadTabs();
    }

    getTabs() {
        return this.tabsList;
    }

    setPage(page: Tag) {
        this.holder.removeAll();
        this.holder.add(page);
    }

    addTabs(tabs: Array<TabButton>) {
        for (let tab of tabs) {
            this.tabsList.push(tab);
        }
        this.loadTabs();
    }

    addTab(tab: TabButton) {
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