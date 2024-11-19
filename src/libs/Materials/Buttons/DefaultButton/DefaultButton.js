import Button from "../../../ui/Tags/Button/Button.js";
import Span from "../../../ui/Tags/Span/Span.js";
import Measure from "../../../ui/Types/Measure.js";

class DefaultButton extends Button {

    constructor(text) {
        super(text);

        this.setWidth(100, Measure.PERCENT);
        this.setHeight(30);
        this.setBackgroundColor("#10d4f3");
        this.setFontColor("#f0f0f0");
        this.setBorder({
            type: "none",
            size: 0,
            color: "transparent"
        });
        this.setBorderRadius(5);
        this.setPosition("relative");
        this.setOverflow("hidden");
        this.setCursor("pointer");

        this.onClick((e) => {
            this.click(e);
        });
        
    }

    click(event) {
        event.preventDefault();

        const diameter = Math.max(this.tag.clientWidth, this.tag.clientHeight);
        const radius = diameter / 2;

        const ripple = new Span();
        ripple.setPosition("absolute");
        ripple.setBorderRadius(50, Measure.PERCENT);
        ripple.setTransform(0);
        ripple.setTransition({
            duration: "1s"
        });
        ripple.setWidth(diameter);
        ripple.setHeight(diameter);
        ripple.setX(event.clientX - this.tag.getBoundingClientRect().left - radius);
        ripple.setY(event.clientY - this.tag.getBoundingClientRect().top - radius);
        ripple.setBackgroundColor("#ffffff80");
        this.add(ripple);
        
        setTimeout(() => {
            ripple.setTransform(4);
            ripple.setOpacity(0);
        }, 1);

        setTimeout(() => {
            this.remove(ripple);
        }, 1000);

    }
}

export default DefaultButton;