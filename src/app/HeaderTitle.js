import Component from "../libs/ui/Component/Component.js";
import H1 from "../libs/ui/Tags/H1/H1.js";

class HeaderTitle extends Component {

    title;

    constructor(text) {
        super();

        this.title = new H1(text);
        this.title.setFontColor("#f0f0f0");
        this.title.setFontFamily("Arial");
        this.add(this.title);
    }
}

export default HeaderTitle;