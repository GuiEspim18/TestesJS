import Tag from "../Tag";

class Header extends Tag {
    constructor(text: string) {
        super("header", text);
    }
}

export default Header;