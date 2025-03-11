import InputTyped from "../InputTyped/InputTyped";

class InputDate extends InputTyped {
    constructor() {
        super();
        (this.tag as HTMLInputElement).type = "date";
    }

    setAppearence(appearence: string) {
        (this.tag as HTMLInputElement).style.setProperty("appearance", appearence);
    }

    setWebkitAppearence(appearence: string) {
        (this.tag as HTMLInputElement).style.setProperty("-webkit-appearance", appearence);
    }

    setDisplayWebkitCalendarPickerIndicator(display: string) {
        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(`input#${this.tag.getAttribute("id")}::-webkit-calendar-picker-indicator { display: ${display}; }`, styleSheet.cssRules.length);
    }

    showPicker() {
        (this.tag as HTMLInputElement).showPicker();
    }
}

export default InputDate;