import Main from "../../../libs/ui/Tags/Main/Main.js";
import P from "../../../libs/ui/Tags/Text/P/P.js";

class Home extends Main {
    constructor() {
        super();
        this.add(new P("Home"));
    }
}

export default Home;