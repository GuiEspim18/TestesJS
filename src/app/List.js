import Component from "../libs/ui/Component/Component.js";
import Ul from "../libs/ui/Tags/Ul/Ul.js";

class List extends Component {
    constructor (content = []) {
        super();

        const ul = new Ul(content);
        ul.setListStyle("none");
        ul.setFontFamily("Arial");
        ul.setFontColor("#cecece");
        ul.setFontSize(12);
        this.add(ul);
    }
}

export default List;