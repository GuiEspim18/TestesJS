import Button from "../../../ui/Tags/Button/Button";
import Span from "../../../ui/Tags/Span/Span";
import Measure from "../../../ui/Types/Measure";

class DefaultButton extends Button {

    rippleColor = "#ffffff"

    constructor(text = "") {
        super(text);

        this.setWidth(100, Measure.PERCENT);
        this.setHeight(30);
        this.setBackgroundColor("#10d4f3");
        this.setFontColor("#f0f0f0");
        this.setBorder("none");
        this.setBorderRadius({ value: 5 });
        this.setPosition("relative");
        this.setOverflow("hidden");
        this.setCursor("pointer");

        this.onClick((e) => {
            this.click(e);
        });
        
    }

    click(event: MouseEvent) {
        event.preventDefault();

        const diameter = Math.max(this.tag.clientWidth, this.tag.clientHeight);
        const radius = diameter / 2;

        const ripple: Span = new Span();
        ripple.setPosition("absolute");
        ripple.setBorderRadius({
            value: 50,
            measure: Measure.PIXELS
        });
        ripple.setTransform(0);
        ripple.setTransition({
            duration: {
                value: 1
            }
        });
        ripple.setWidth(diameter);
        ripple.setHeight(diameter);
        ripple.setX({ value: event.clientX - this.tag.getBoundingClientRect().left - radius});
        ripple.setY({ value: event.clientY - this.tag.getBoundingClientRect().top - radius });
        ripple.setBackgroundColor(this.rippleColor+ "59");
        this.add(ripple);
        
        setTimeout(() => {
            ripple.setTransform(4);
            ripple.setOpacity(0);
        }, 1);

        setTimeout(() => {
            this.remove(ripple);
        }, 1000);

    }

    setRippleColor(rippleColor: string) {
        this.rippleColor = rippleColor;
    }
}

export default DefaultButton;