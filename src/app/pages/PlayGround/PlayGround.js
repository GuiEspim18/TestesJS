import Controller from "../../../libs/Materials/FormManager/Controller.js";
import FormManager from "../../../libs/Materials/FormManager/FormManager.js";
import Hr from "../../../libs/ui/Tags/Hr/Hr.js";
import Main from "../../../libs/ui/Tags/Main/Main.js";
import P from "../../../libs/ui/Tags/Text/P/P.js";
import TextField from "../../../libs/Materials/Fields/TextField/TextField.js";
import EmailField from "../../../libs/Materials/Fields/EmailField/EmailField.js";
import DefaultButton from "../../../libs/Materials/Buttons/DefaultButton/DefaultButton.js";

class PlayGround extends Main {
    constructor() {
        super();

        this.add(new P("Play Ground"));
        this.add(new Hr());

        // Add this code here

        const form = this.add(new FormManager([
            new Controller(new TextField("Name", "name")),
            new Controller(new TextField("Surname", "surname")),
            new Controller(new TextField("Telephone", "telephone"), false),
            new Controller(new EmailField("Email", "email"))
        ]));

        const btn = this.add(new DefaultButton("Validate"));
        btn.onClick(() => {
            if (form.isValid()) {
                console.log(form.getValue());
            }
        });

        
    }
}

export default PlayGround;