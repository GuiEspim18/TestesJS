class ElementNS {
    tag;

    constructor(tag = "svg", ns="http://www.w3.org/2000/svg", content = "") {
        this.setTag(tag, ns);
        if (content.length > 0) {
            this.setContent(content);
        }
    }

    setTag(tag, ns) {
        this.tag = document.createElementNS(ns, tag);
    }

    setContent(content) {
        this.tag.innerHTML = content;

    }

    load() {
        return this.tag;
    }

}

export default ElementNS;