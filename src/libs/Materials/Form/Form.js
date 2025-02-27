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
}

export default Form;