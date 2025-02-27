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

    setInvalid() {
        this.controller.setInvalid();
    }

}

export default Controller;