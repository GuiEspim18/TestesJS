import Tag from "../../../ui/Tags/Tag";
import Tabs from "../../Tabs/Tabs";
import DefaultButton from "../DefaultButton/DefaultButton";

class TabButton extends DefaultButton {

    private page: Tag;
    private parent: Tabs;

    constructor(text = "", page?: Tag) {
        super(text);

        this.setBorderTopRadius({ value: 5 });
        this.setBorderBottomRadius({ value: 0 });
        this.setMarginHorizontal({ value: 2.5 });
        this.setBackgroundColor("#cecece");

        if (page != null) {
            this.setPage(page);
        }

        this.onClick(() => {
            if (this.parent != null) {
                const tabs = this.parent.getTabs();
                for (let tab of tabs) {
                    tab.setSelected(false);
                }
                this.setSelected(true);
                if (page != null) {
                    this.parent.setPage(page);
                }
            }
        });

    }

    setPage(page: Tag) {
        this.page = page;
    }

    setParent(parent: Tabs) {
        this.parent = parent;
    }

    getPage() {
        return this.page;
    }

    setSelected(selected: boolean) {
        if (selected) {
            this.setBackgroundColor("#10d4f3");
        } else {
            this.setBackgroundColor("#cecece");
        }
    }

}

export default TabButton;