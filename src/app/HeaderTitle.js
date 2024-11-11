import H1 from "../libs/ui/Tags/Text/H1/H1.js";

class HeaderTitle extends H1 {
    constructor(text) {
        super(text);

        this.setFontColor("#f0f0f0");
        this.setFontFamily("Arial");
    }
}

export default HeaderTitle;