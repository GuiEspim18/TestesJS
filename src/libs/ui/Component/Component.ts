import e from "express";
import Tag from "../Tags/Tag";

class Component {
    private content: HTMLElement;

    constructor() {
        this.content = document.createElement("div");
    }

    public load(): HTMLElement {
        return this.content;
    }

    public add(tag: Tag): Tag {
        this.content.appendChild(tag.load());
        return tag;
    }
}

export default Component;