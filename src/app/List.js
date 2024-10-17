import Component from "../libs/ui/Component/Component.js";
import Ul from "../libs/ui/Tags/Ul/Ul.js";

class List extends Component {
    constructor (content = []) {
        super();

        this.ul = new Ul(content);
        this.ul.setListStyle("none");
        this.ul.setFontFamily("Arial");
        this.ul.setFontColor("#cecece");
        this.ul.setFontSize(12);
        this.add(this.ul);
    }

    removeLine(index) {
        this.ul.removeLine(index);
    }
}

export default List;