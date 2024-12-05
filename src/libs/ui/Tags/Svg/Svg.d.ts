import ElementNS from "../ElementNS/ElementNS";

declare class Svg extends ElementNS {
    constructor(viewBox: string, content?: string);

    public setContent(content: string): void;

    public setViewBox(viewBox: string): void;

    public setXmlns(xmlns: string): void;

    public setFill(fill: string): void;
}

export default Svg;