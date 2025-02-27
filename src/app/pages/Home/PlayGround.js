import Hr from "../../../libs/ui/Tags/Hr/Hr.js";
import Main from "../../../libs/ui/Tags/Main/Main.js";
import P from "../../../libs/ui/Tags/Text/P/P.js";

class PlayGround extends Main {
    constructor() {
        super();

        this.add(new P("Play Ground"));
        this.add(new Hr());

        
    }
}

export default PlayGround;