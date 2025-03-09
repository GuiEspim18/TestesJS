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
        }
        return false;
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