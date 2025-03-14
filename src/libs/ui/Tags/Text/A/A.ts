import Tag from "../../Tag";

class A extends Tag {
    constructor(text="", href="") {
        super("a", text);
        if (href.length > 0) {
            this.setHref(href);
        }
    }

    setHref(link: string) {
        (this.tag as HTMLLinkElement).href = link;
    }

    setTarget(target: string) {
        (this.tag as HTMLLinkElement).target = target;
    }
}

export default A;