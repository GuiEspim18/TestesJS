import Measure from "../../Types/Measure";
import { TSize } from "../../Types/SizeType";
import ElementNS from "../ElementNS/ElementNS";

class Svg extends ElementNS {
    constructor(viewBox: string, content: string="") {
        super();
        this.setContent(content);
        this.tag.setAttributeNS(null, "viewBox", viewBox);
        this.tag.setAttributeNS(null, "width", "50");
        this.tag.setAttributeNS(null, "height", "50");
    }

    setViewBox(viewBox: string) {
        this.tag.setAttributeNS(null, "viewBox", viewBox);
    }

    setXmlns(xmlns: string) {
        this.tag.setAttributeNS(null, "xmlns", xmlns);
    }

    setFill(fill: string) {
        this.tag.setAttributeNS(null, "fill", fill);
    }

    setSize(size: TSize) {
        this.tag.setAttributeNS(null, "width", String(this.formatMeasure(size.value, size.measure == null ? Measure.PIXELS : size.measure)));
        this.tag.setAttributeNS(null, "height", String(this.formatMeasure(size.value, size.measure == null ? Measure.PIXELS : size.measure)));
    }

    setWidth(width: TSize) {
        this.tag.setAttributeNS(null, "width", String(this.formatMeasure(width.value, width.measure == null ? Measure.PIXELS : width.measure)));
    }

    setHeight(height: TSize) {
        this.tag.setAttributeNS(null, "height", String(this.formatMeasure(height.value, height.measure == null ? Measure.PIXELS : height.measure)));
    }
}

export default Svg;