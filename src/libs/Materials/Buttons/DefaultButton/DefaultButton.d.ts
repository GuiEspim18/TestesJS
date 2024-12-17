import Button from "../../../ui/Tags/Button/Button";

declare class DefaultButton extends Button {
    
    private rippleColor: string;

    constructor(text: string);

    private click(event: PointerEvent): void;

    public setRippleColor(rippleColor: string): void;

}

export default DefaultButton;