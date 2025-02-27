import Controller from "../../../libs/Materials/Form/Controller.js";
import Form from "../../../libs/Materials/Form/Form.js";
import Hr from "../../../libs/ui/Tags/Hr/Hr.js";
import Main from "../../../libs/ui/Tags/Main/Main.js";
import P from "../../../libs/ui/Tags/Text/P/P.js";
import TextField from "../../../libs/Materials/Fields/TextField/TextField.js";
import DefaultButton from "../../../libs/Materials/Buttons/DefaultButton/DefaultButton.js";

class PlayGround extends Main {
    constructor() {
        super();

        this.add(new P("Play Ground"));
        this.add(new Hr());

        // Display here your code

        const name = this.add(new TextField("Name", "name"));

        const surname = this.add(new TextField("Surname", "surname"));

        const telephone = this.add(new TextField("Telephone", "telephone"));

        const form = new Form([
            new Controller(name),
            new Controller(surname),
            new Controller(telephone, false)
        ]);

        const btn = this.add(new DefaultButton("Validate"));
        btn.onClick(() => {
            if (form.isValid()) {
                console.log(form.getValue());
            }
        });

        
    }
}

export default PlayGround;