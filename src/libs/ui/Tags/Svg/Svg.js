import Tag from "../Tag";

class Svg extends Tag {
    constructor(viewBox, content="") {
        super("svg");
        this.tag.innerHTML = content;
        this.tag.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        this.tag.setAttribute("viewBox", viewBox);
    }

    setContent(content) {
        this.tag.innerHTML = content;
    }

    setViewBox(viewBox) {
        this.tag.setAttribute("viewBox", viewBox);
    }

    setXmlns(xmlns) {
        this.tag.setAttribute("xmlns", xmlns);
    }

    setFill(fill) {
        this.tag.setAttribute("fill", fill);
    }
}

export default Svg;