import DefaultButton from "../DefaultButton/DefaultButton.js";

class NavButton extends DefaultButton {
    path = "";

    constructor(text = "", path = "") {
        super();
        this.path = path;
        if (this.path.length > 0) {
            this.onClick(() => {
                history.pushState(null, "", this.path);
            });
        }
    }

    setNavigateTo(path) {
        this.onClick(() => {
            history.pushState(null, "", path);
        });
    }
}

export default NavButton;