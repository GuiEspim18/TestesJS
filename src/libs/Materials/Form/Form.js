class Form {
    constructor(controllers) {
        this.controllers = controllers;
    }

    addController(controller) {
        this.controllers.push(controller);
    }

    isValid() {
        const validation = [];
        for (const controller of this.controllers) {
            validation.push(controller.isValid());
            if (!controller.isValid()) {
                controller.setInvalid();
            }
        }
        return !validation.includes(false);
    }

    getValue() {
        const value = { };
        for (const controller of this.controllers) {
            value[controller.getName()] = controller.getValue();
        }
        return value;
    }
}

export default Form;