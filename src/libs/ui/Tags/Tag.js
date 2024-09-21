class Tag {

    tag;

    constructor(tag = "div", text = "") {
        this.setTag(tag);
        if (text.length > 0) {
            this.tag.textContent = String(text);
        }
    }

    setTag(tag) {
        this.tag = document.createElement(tag);
    }

    add(tag) {
        this.tag.appendChild(tag.load());
    }

    setText(text) {
        this.tag.textContent = String(text);
    }

    load() {
        return this.tag;
    }

    setBackgroundColor(color) {
        this.tag.style.backgroundColor = color;
    }

    setHeight(height, type = "pixels") {

        this.tag.style.height = this.formatMeasure(height, type);
    }

    setWidth(width, type = "pixels") {
        this.tag.style.width = this.formatMeasure(width, type);
    }

    setSize(size) {
        this.tag.style.width = this.formatMeasure(size, type);
        this.tag.style.height = this.formatMeasure(size, type);
    }

    setBorder({width = 1, color, style = "solid", radius = 0, measure = "pixels"}) {
        if (radius > 0) {
            this.tag.style.borderRadius = this.formatMeasure(radius, measure);
        }
        this.tag.style.border = `${style} ${width}px ${color}`;
    }

    setBorderLeft({width = 1, color, style = "solid", radius = 0}) {
        if (radius > 0) {
            this.tag.style.borderRadius = this.formatMeasure(radius, measure);
        }
        this.tag.style.borderLeft = `${style} ${width}px ${color}`;
    }

    setBorderRight({width = 1, color, style = "solid", radius = 0}) {
        if (radius > 0) {
            this.tag.style.borderRadius = this.formatMeasure(radius, measure);
        }
        this.tag.style.borderRight = `${style} ${width}px ${color}`;
    }

    setBorderTop({width = 1, color, style = "solid", radius = 0}) {
        if (radius > 0) {
            this.tag.style.borderRadius = this.formatMeasure(radius, measure);
        }
        this.tag.style.borderTop = `${style} ${width}px ${color}`;
    }

    setBorderBottom({width = 1, color, style = "solid", radius = 0}) {
        if (radius > 0) {
            this.tag.style.borderRadius = this.formatMeasure(radius, measure);
        }
        this.tag.style.borderBottom = `${style} ${width}px ${color}`;
    }

    
    // Private methods

    formatMeasure(value, type) {
        switch (type) {
            case "pixels": return value + "px";
            case "percentage": return value + "%";
            case "em": return value + "em";
            case "rem": return value + "rem";
        }
    }

}

export default Tag;