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
                    return this.validateDate();
            }
        }
        return true;
    }

    validateDate() {
        const value = this.controller.getValue();
        if (value.length > 0) {
            return true;
        }
        return false
    }
}

export default Controller;