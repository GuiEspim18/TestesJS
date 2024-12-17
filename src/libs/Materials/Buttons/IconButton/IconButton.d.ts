import Div from "../../../ui/Tags/Div/Div";
import Tag from "../../../ui/Tags/Tag";
import P from "../../../ui/Tags/Text/P/P";
import DefaultButton from "../DefaultButton/DefaultButton";

declare class IconButton extends DefaultButton {
    
   private divIcon: Div;
   private textBtn: P;
   private icon: Tag;

   constructor(text?: string, icon?: Tag);

   public setIcon(icon: Tag): void;

   public setColor(color: string): void;

}

export default IconButton;