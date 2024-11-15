import Tag from "../Tag";

declare class Form extends Tag {

    public setAction(action: string): void;

    public setMethod(method: string): void;

    public setEnctype(enctype: string): void

    public setTarget(target: string): void;

    public setNovalidate(): void;

    public setAutocomplete(autocomplete: string): void;

    public setRel(rel: string): void;

}

export default Form;