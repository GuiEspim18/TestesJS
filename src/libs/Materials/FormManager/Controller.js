import FieldType from "../Fields/FieldType.js";

class Controller {
    constructor(controller, required=true) {
        this.controller = controller;
        this.required = required;
    }

    isValid() {
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

    validateLength() {
        if (this.required) {
            const value = this.controller.getValue();
            return value.length > 0
        }
        return true;
    }

    validateEmail() {
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

    containsWhiteSpace(str) {
        return /\s/g.test(str);
    }


    setInvalid() {
        this.controller.setInvalid();
    }

    getValue() {
        return this.controller.getValue();
    }

    getName() {
        return this.controller.getName();
    }

    load() {
        return this.controller;
    }

}

export default Controller;