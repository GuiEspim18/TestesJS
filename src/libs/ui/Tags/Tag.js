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
        this.tag.appendChild(tag.load());
    }

    setText(text) {
        this.tag.textContent = String(text);
    }

    load() {
        return this.tag;
    }

    setBackgroundColor(color) {
        this.tag.style.backgroundColor = color;
    }

}

export default Tag;