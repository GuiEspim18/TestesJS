import IconButton from "../libs/Materials/Buttons/IconButton/IconButton.js";
import NavButton from "../libs/Materials/Buttons/NavButton/NavButton.js";
import Icons from "../libs/Materials/Icons/Icons.js";
import Outlet from "../libs/Materials/Routing/Outlet/Outlet.js";
import Component from "../libs/ui/Component/Component.js";
import Div from "../libs/ui/Tags/Div/Div.js";
import Svg from "../libs/ui/Tags/Svg/Svg.js";
import P from "../libs/ui/Tags/Text/P/P.js";

class App extends Component {

    constructor() {
        super();
        let current = 0; 

        const text = new P(String(current));
        this.add(text);

        this.add(new Svg("0 0 448 512", `<path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"></path>`));

        const addBtn = new IconButton("Adicionar");
        addBtn.setMarginBottom(5);
        addBtn.onClick(() => {
            current++;
            text.setText(current);
        });

        this.add(addBtn);

        this.add(new NavButton("Home", "/home"));
        this.add(new NavButton("Teste", "/test/" + current));
        
        const outlet = new Div();
        new Outlet(outlet);
        this.add(outlet);
    }

}

export default App;