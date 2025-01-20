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

    setSize(size, measure="") {
        this.tag.setAttributeNS(null, "width", this.formatMeasure(size, measure));
        this.tag.setAttributeNS(null, "height", this.formatMeasure(size, measure));
    }

    setWidth(width) {
        this.tag.setAttributeNS(null, "width", this.formatMeasure(width, measure));
    }

    setHeight(height) {
        this.tag.setAttributeNS(null, "height", this.formatMeasure(height, measure));
    }
}

export default Svg;