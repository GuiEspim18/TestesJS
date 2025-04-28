import Controller from "../../../libs/Materials/FormManager/Controller";
import FormManager from "../../../libs/Materials/FormManager/FormManager";
import Hr from "../../../libs/ui/Tags/Hr/Hr";
import Main from "../../../libs/ui/Tags/Main/Main";
import P from "../../../libs/ui/Tags/Text/P/P";
import TextField from "../../../libs/Materials/Fields/TextField/TextField";
import EmailField from "../../../libs/Materials/Fields/EmailField/EmailField";
import DefaultButton from "../../../libs/Materials/Buttons/DefaultButton/DefaultButton";

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