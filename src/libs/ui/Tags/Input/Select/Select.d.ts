import Tag from "../../Tag";
import Option from "./Option/Option";

declare class Select extends Tag {

    constructor(options?: Array<Option>);

    public setOptions(options: Array<Option>): void;

    public addOptions(options: Array<Option>): void;

    public addOption(option: Option): void;

    public setOutline(outline: string): void;

    public getValue(): string | number | any;

    private loadOptions(): void;

    public onFocusIn(focusIn: () => void | any): void;
    
    public onFocusOut(focusOut: () => void | any): void;
}

export default Select;