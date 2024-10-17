import Tag from "../Tag.js"

declare class A extends Tag {
    constructor(text?: string, href?: string);
    
    public setHref(link: string): void;
    public setTarget(target: "_self" | "_blank" | "_parent" | "_top"): void;
}

export default A;