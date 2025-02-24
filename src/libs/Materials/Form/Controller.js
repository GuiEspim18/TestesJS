class Controller {
    constructor(controller, required=true) {
        this.controller = controller;
        this.required = required;
    }

    isValid() {
        if (this.required) {
            switch(this.controller.type) {
                
            }
        }
        return true;
    }
}

export default Controller;