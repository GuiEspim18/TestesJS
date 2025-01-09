import InputTyped from "../InputTyped/InputTyped.js";

class InputDate extends InputTyped {
    constructor() {
        super();
        this.tag.type = "date";
    }

    setAppearence(appearence) {
        this.tag.style.setProperty("appearance", appearence);
    }

    setWebkitAppearence(appearence) {
        this.tag.style.setProperty("-webkit-appearance", appearence);
    }

    setDisplayWebkitCalendarPickerIndicator(display) {
        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(`input#${this.tag.getAttribute("id")}::-webkit-calendar-picker-indicator { display: ${display}; }`, styleSheet.cssRules.length);
    }

    // focus() {
    //     this.tag.focus();
    // }

    showPicker() {
        this.tag.showPicker();
    }
}

export default InputDate;