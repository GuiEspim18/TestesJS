class Component {
    content;

    constructor() {
        this.content = document.createElement("div");
    }

    load() {
        return this.content;
    }

    add(tag) {
        if (tag.render != null) {
            tag.render();
        }
        this.content.appendChild(tag.load());
    }
}

export default Component;