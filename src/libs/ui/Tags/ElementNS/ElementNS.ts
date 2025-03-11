import Measure from "../../Types/Measure";
import { TMeasure } from "../../Types/MeasureType";

class ElementNS {
    private tag: Element;

    constructor(tag: string = "svg", ns: string ="http://www.w3.org/2000/svg", content: string = "") {
        this.setTag(tag, ns);
        if (content.length > 0) {
            this.setContent(content);
        }
    }

    setTag(tag: string, ns: string) {
        this.tag = document.createElementNS(ns, tag);
    }

    setContent(content: string) {
        this.tag.innerHTML = content;

    }

    formatMeasure(value: number, type: TMeasure) {
        switch (type) {
            case Measure.PIXELS: return value + "px";
            case Measure.PERCENT: return value + "%";
            case Measure.EM: return value + "em";
            case Measure.REM: return value + "rem";
            case Measure.AUTO: return "auto";
            default: return value; // Retorna o valor diretamente se não for reconhecido
        }
    }

    load(): Element {
        return this.tag;
    }

}

export default ElementNS;