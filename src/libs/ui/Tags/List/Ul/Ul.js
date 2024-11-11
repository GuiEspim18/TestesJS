import Tag from "../../Tag.js";

class Ul extends Tag {
    constructor(content) {
        super("ul");
        if (content.length > 0) {
            this.addContent(content);
        }
    }

    addContent(content) {
        for (let item of content) {
            this.addLine(item);
        }
    }

    addLine(content) {
        const li = document.createElement("li");
        if (typeof(content) == "object") {
            li.appendChild(content.load());
        }
        if (typeof(content) == "string") {
            li.innerText = content;
        }
        this.tag.appendChild(li);
    }

    setListStyle(type) {
        this.tag.style.listStyle = type;
    }

    setListStylePosition(position) {
        this.tag.style.listStylePosition = position;
    }

    removeLine(index) {
        const items = this.tag.getElementsByTagName("li");
        if (index >= 0 && index < items.length) {
            this.tag.removeChild(items[index]);
        } else {
            console.warn("Index out of bounds. No item removed.");
        }
    }

}

export default Ul;