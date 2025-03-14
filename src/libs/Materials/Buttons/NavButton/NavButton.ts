import DefaultButton from "../DefaultButton/DefaultButton";

class NavButton extends DefaultButton {
    path = "";

    constructor(text: string = "", path: string = "") {
        super();
        this.setText(text);
        this.path = path;
        if (this.path.length > 0) {
            this.onClick(() => {
                history.pushState(null, "", this.path);
            });
        }
    }

    setNavigateTo(path: string) {
        this.onClick(() => {
            history.pushState(null, "", path);
        });
    }
}

export default NavButton;