import Tag from "../../ui/Tags/Tag";
import TabButton from "../Buttons/TabButton/TabButton";

declare class Tabs extends Tag {

    private holder: Tag;
    private tabsHolder: Tag;
    private tabsList: Array<TabButton>;

    constructor(tabs?: Array<TabButton>);

    public setTabs(tabs: Array<TabButton>): void;

    public getTabs(): Array<TabButton>;

    public setPage(page: Tag): void;

    public addTabs(tabs: Array<TabButton>): void;

    public addTab(tab: TabButton): void;

    private loadTabs(): void;

}

export default Tabs;