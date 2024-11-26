import ElementNS from "../ElementNS/ElementNS.js";

class Svg extends ElementNS {
    constructor(viewBox, content="") {
        super();
        this.setContent(content);
        this.tag.setAttributeNS(null, "viewBox", viewBox);
        this.tag.setAttributeNS(null, "width", "50");
        this.tag.setAttributeNS(null, "height", "50");
    }

    setViewBox(viewBox) {
        this.tag.setAttributeNS(null, "viewBox", viewBox);
    }

    setXmlns(xmlns) {
        this.tag.setAttributeNS(null, "xmlns", xmlns);
    }

    setFill(fill) {
        this.tag.setAttributeNS(null, "fill", fill);
    }

    setSize(size) {
        this.tag.setAttributeNS(null, "width", size);
        this.tag.setAttributeNS(null, "height", size);
    }

    setWidth(width) {
        this.tag.setAttributeNS(null, "width", width);
    }

    setHeight(height) {
        this.tag.setAttributeNS(null, "height", height);
    }
}

export default Svg;