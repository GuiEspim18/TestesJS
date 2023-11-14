import { Format } from "../utils/format/format";
import { Styles } from "../utils/types/styles/styles.types";
import { HtmlTag } from "../utils/types/tag/tag.types";

export class Tag {

    protected style: Styles;
    protected tag: HtmlTag

    constructor (styles: Styles = {}, tag: HtmlTag) {
        this.style = styles
        this.tag = tag;
    }

    public render (content: string): string {
        const keys = Object.keys(this.style);
        const styles = new Array();
        const style: any = this.style;
        for (let item in this.style) {
            let index = "";
            for (let counter = 0; counter < item.length; counter++) {
                index += item[counter].toLocaleLowerCase();
                const formatter = new Format(item[counter+1] ? item[counter+1] : "");
                const upperCase = formatter.isUpperCase();
                if (upperCase) {
                    index += "-";
                }
            }
            index = index.substring(0, index.length - 1);
            styles.push(`${index}: ${style[item]}`);
        }
        if (keys.length > 0) {
            let styleString: string = "";
            styles.forEach(function (element) {
                styleString += ` ${element};`;
            });
            styleString = styleString.slice(1);
            return `<p style="${styleString}">${content}</p>`;
        }
        return `<p>${content}</p>`;
    }
}