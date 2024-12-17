import DefaultButton from "../DefaultButton/DefaultButton";

declare class NavButton extends DefaultButton {

    constructor(text?: string, path?: string);

    public setNavigateTo(path: string): void;

}

export default NavButton;