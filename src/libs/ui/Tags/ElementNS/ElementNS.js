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

    formatMeasure(value, type) {
        switch (type) {
            case "pixels": return value + "px";
            case "percentage": return value + "%";
            case "em": return value + "em";
            case "rem": return value + "rem";
            case "auto": return "auto";
            default: return value; // Retorna o valor diretamente se não for reconhecido
        }
    }

    load() {
        return this.tag;
    }

}

export default ElementNS;