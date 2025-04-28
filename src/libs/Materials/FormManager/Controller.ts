import Field from "../Fields/Field";
import FieldType from "../Fields/FieldType";

class Controller {

    private controller: Field;
    private required: boolean;

    constructor(controller: Field, required=true) {
        this.controller = controller;
        this.required = required;
    }

    public isValid() {
        if (this.required) {
            switch(this.controller.type) {
                case FieldType.DATE:
                    return this.validateLength();
                case FieldType.TEXT:
                    return this.validateLength();
                case FieldType.EMAIL:
                    return this.validateEmail();
            }
        }
        return true;
    }

    private validateLength() {
        if (this.required) {
            const value = this.controller.getValue();
            return value.length > 0
        }
        return true;
    }

    private validateEmail() {
        if (this.validateLength()) {
            const value = this.controller.getValue();
            const user = value.substring(0, value.indexOf("@"));
            const domain = value.substring(value.indexOf("@") + 1, value.length);
            if (value.indexOf("@") != -1 && !this.containsWhiteSpace(user) && user.length > 0 && !this.containsWhiteSpace(domain) && domain.length > 0 && user.indexOf("@") == -1 && domain.indexOf("@") == -1 && domain.search(".") != -1 && domain.indexOf(".") >= 1 && domain.indexOf(".") < domain.length - 1) {
                return true;
            }
            return false;
        }
        return false;
    }

    private containsWhiteSpace(str: string) {
        return /\s/g.test(str);
    }


    public setInvalid() {
        this.controller.setInvalid();
    }

    public getValue() {
        return this.controller.getValue();
    }

    public getName() {
        return this.controller.getName();
    }

    public load() {
        return this.controller;
    }

}

export default Controller;