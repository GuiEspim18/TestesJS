class Tag {

    tag;

    constructor(text = "") {
        this.tag.innerText = text;
    }

    setTag(tag) {
        this.tag = document.createElement(tag);
    }

    add(tag) {
        this.tag.appendChild(tag);
    }

    setText(text) {
        this.tag.innerText = text;
    }

}

export default Tag;