import Tag from "../../Tag";
import Option from "./Option/Option";

declare class Select extends Tag {

    constructor(options?: Array<Option>);

    public setOptions(options: Array<Option>): void;

    public addOption(option: Option): void;

    public getValue(): string | number | any;

    private loadOptions(): void;


}

export default Select;