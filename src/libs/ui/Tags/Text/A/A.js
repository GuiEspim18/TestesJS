import Tag from "../../Tag.js"

class A extends Tag {
    constructor(text="", href="") {
        super("a", text);
        if (href.length > 0) {
            this.setHref(href);
        }
    }

    setHref(link) {
        this.tag.href = link;
    }

    setTarget(target) {
        this.tag.target = target;
    }
}

export default A;