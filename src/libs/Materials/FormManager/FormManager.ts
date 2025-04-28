import Div from "../../ui/Tags/Div/Div";
import Controller from "./Controller";

class FormManager {

    private controllers: Array<Controller> = new Array();

    constructor(controllers: Array<Controller>) {
        this.controllers = controllers;
    }

    public addController(controller: Controller) {
        this.controllers.push(controller);
    }

    public isValid() {
        const validation = [];
        for (const controller of this.controllers) {
            validation.push(controller.isValid());
            if (!controller.isValid()) {
                controller.setInvalid();
            }
        }
        return !validation.includes(false);
    }

    public getValue() {
        const value: Record<string, any> = { };
        for (const controller of this.controllers) {
            value[controller.getName()] = controller.getValue();
        }
        return value;
    }

    public load() {
        const form = new Div();
        for (const controller of this.controllers) {
            form.add(controller.load());
        }
        return form.load();
    }
}

export default FormManager;