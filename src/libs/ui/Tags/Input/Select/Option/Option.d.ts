import Tag from "../../../Tag";

declare class Option extends Tag {

    constructor(value?: string | number | any, text?: string)

    public setValue(value?: string | number | any): void;

    public setText(text: string): void;

}

export default Option;