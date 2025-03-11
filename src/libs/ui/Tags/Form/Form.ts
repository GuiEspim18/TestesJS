import Tag from "../Tag";

class Form extends Tag {
    constructor() {
        super("form");
    }

    setAction(action: string) {
        this.tag.setAttribute("action", action);
    }

    setMethod(method: string) {
        this.tag.setAttribute("method", method);
    }

    setEnctype(enctype: string) {
        this.tag.setAttribute("enctype", enctype);
    }

    setTarget(target: string) {
        this.tag.setAttribute("target", target);
    }

    setAutocomplete(autocomplete: string) {
        this.tag.setAttribute("autocomplete", autocomplete);
    }

    setRel(rel: string) {
        this.tag.setAttribute("rel", rel);
    }
}

export default Form;