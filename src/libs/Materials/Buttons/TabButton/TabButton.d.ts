import Tag from "../../../ui/Tags/Tag";
import DefaultButton from "../DefaultButton/DefaultButton";

declare class TabButton extends DefaultButton {

    private parent: Tag;
    private page: Tag;

    constructor(text?: string, page?: Tag);

    public setPage(page: Tag): void;

    public setParent(parent: Tag): void;

    public getPage(): Tag;

    public setSelected(selected: boolean): void;

}

export default TabButton;