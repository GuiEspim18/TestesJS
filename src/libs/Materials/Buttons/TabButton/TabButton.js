import DefaultButton from "../DefaultButton/DefaultButton.js";

class TabButton extends DefaultButton {

    page = null;
    parent = null;

    constructor(text = "", page = null) {
        super(text);

        this.setBorderTopRadius(5);
        this.setBorderBottomRadius(0);
        this.setMarginHorizontal(2.5);
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

                this.parent.setPage(page);
            }
        });

    }

    setPage(page) {
        this.page = page;
    }

    setParent(parent) {
        this.parent = parent;
    }

    getPage() {
        return this.page;
    }

    setSelected(selected) {
        if (selected) {
            this.setBackgroundColor("#10d4f3");
        } else {
            this.setBackgroundColor("#cecece");
        }
    }

}

export default TabButton;