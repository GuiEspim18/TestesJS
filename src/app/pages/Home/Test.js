import Router from "../../../libs/Materials/Routing/Router/Router.js";
import Main from "../../../libs/ui/Tags/Main/Main.js";
import P from "../../../libs/ui/Tags/Text/P/P.js";

class Test extends Main {
    constructor() {
        super();
        this.add(new P("Teste"));
        Router.getParam();
    }
}

export default Test;