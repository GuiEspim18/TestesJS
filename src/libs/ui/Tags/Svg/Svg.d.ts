import Tag from "../Tag";

declare class Svg extends Tag {
    constructor(viewBox: string, content?: string);

    public setContent(content: string): void;

    public setViewBox(viewBox: string): void;

    public setXmlns(xmlns: string): void;

    public setFill(fill: string): void;
}

export default Svg;