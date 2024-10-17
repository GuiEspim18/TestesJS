import Component from "../../Component/Component";
import Tag from "../Tag";

/**
 * @class Ol
 * @extends Tag
 */
declare class Ol extends Tag {

    constructor(content?: Array<string | Component | Tag>);

    public addContent(content: Array<string | Component | Tag>): void;
    public addLine(line: string | Component | Tag): void;
    public setListStyle(
        type: "none" | "disc" | "circle" | "square" | "decimal" | "decimal-leading-zero" | "lower-roman" | "upper-roman" | "lower-alpha" | "upper-alpha" | "lower-greek" | "upper-greek" | "armenian" | "georgian" | "cjk-ideographic" | "hiragana" | "katakana" | "hiragana-iroha" | "katakana-iroha"
    ): void;
    public setListStylePosition(position: "inside" | "outside"): void;
    public removeLine(index: number): void;

}

export default Ol;