import IconButton from "../libs/Materials/Buttons/IconButton/IconButton.js";
import IconRoundButton from "../libs/Materials/Buttons/IconRoundButton/IconRoundButton.js";
import NavButton from "../libs/Materials/Buttons/NavButton/NavButton.js";
import TabButton from "../libs/Materials/Buttons/TabButton/TabButton.js";
import Icons from "../libs/Materials/Icons/Icons.js";
import Outlet from "../libs/Materials/Routing/Outlet/Outlet.js";
import Tabs from "../libs/Materials/Tabs/Tabs.js";
import Component from "../libs/ui/Component/Component.js";
import Div from "../libs/ui/Tags/Div/Div.js";
import P from "../libs/ui/Tags/Text/P/P.js";

class App extends Component {

    constructor() {
        super();
        let current = 0; 

        const tabs = new Tabs([ new TabButton("Home"), new TabButton("Users") ]);
        this.add(tabs);

        const text = new P(String(current));
        this.add(text);

        this.add(Icons.LEFT_LONG);

        const addBtn = new IconButton("Adicionar",  Icons.LEFT_LONG);
        addBtn.setMarginBottom(5);
        addBtn.onClick(() => {
            current++;
            text.setText(current);
        });
    
        this.add(new IconRoundButton(Icons.HOME));

        this.add(addBtn);

        this.add(new NavButton("Home", "/home"));
        this.add(new NavButton("Teste", "/test/" + current));
        
        const outlet = new Div();
        new Outlet(outlet);
        this.add(outlet);
    }

}

export default App;