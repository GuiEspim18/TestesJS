class Tag {

    tag;

    constructor(tag = "div", text = "") {
        this.setTag(tag);
        if (text.length > 0) {
            this.tag.textContent = String(text);
        }
    }

    setTag(tag) {
        this.tag = document.createElement(tag);
    }

    add(tag) {
        this.tag.appendChild(tag);
    }

    setText(text) {
        this.tag.textContent = String(text);
    }

    load() {
        return this.tag;
    }

}

export default Tag;