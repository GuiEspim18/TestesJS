import { TPosition } from "../../../Types/PositionType";
import Tag from "../../Tag";

class Ol extends Tag {
    constructor(content: Array<string | Tag>) {
        super("ol");
        if (content.length > 0) {
            this.addContent(content);
        }
    }

    addContent(content: Array<string | Tag>) {
        for (let item of content) {
            this.addLine(item);
        }
    }

    addLine(content: string | Tag) {
        const li = document.createElement("li");
        if (typeof(content) == "object") {
            li.appendChild(content.load());
        }
        if (typeof(content) == "string") {
            li.innerText = content;
        }
        this.tag.appendChild(li);
    }

    setListStyle(type: string) {
        this.tag.style.listStyle = type;
    }

    setListStylePosition(position: TPosition) {
        this.tag.style.listStylePosition = position as string;
    }

    removeLine(index: number) {
        const items: HTMLCollectionOf<HTMLLIElement> = this.tag.getElementsByTagName("li");
        if (index >= 0 && index < items.length) {
            this.tag.removeChild(items[index]);
        } else {
            console.warn("Index out of bounds. No item removed.");
        }
    }
}

export default Ol;