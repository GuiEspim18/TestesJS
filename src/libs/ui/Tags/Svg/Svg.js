import Tag from "../Tag.js";

class Svg extends Tag {
    constructor(viewBox, content="") {
        super("svg");
        this.tag.innerHTML = content;
        console.log(this.tag);
        this.tag.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        this.tag.setAttribute("viewBox", viewBox);
        this.tag.setAttribute("width", "14");
        this.tag.setAttribute("height", "14");
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