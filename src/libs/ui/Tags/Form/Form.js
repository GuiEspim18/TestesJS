import Tag from "../Tag.js";

class Form extends Tag {
    constructor() {
        super("form");
    }

    setAction(action) {
        this.tag.setAttribute("action", action);
    }

    setMethod(method) {
        this.tag.setAttribute("method", method);
    }

    setEnctype(enctype) {
        this.tag.setAttribute("enctype", enctype);
    }

    setTarget(target) {
        this.tag.setAttribute("target", target);
    }

    setNovalidate() {
        this.tag.setAttribute("novalidate");
    }

    setAutocomplete(autocomplete) {
        this.tag.setAttribute("autocomplete", autocomplete);
    }

    setRel(rel) {
        this.tag.setAttribute("rel", rel);
    }
}

export default Form;