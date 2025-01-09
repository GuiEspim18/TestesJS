import Field from "../Field.js"
import InputDate from "../../../ui/Tags/Input/InputDate/InputDate.js";
import IconRoundButton from "../../Buttons/IconRoundButton/IconRoundButton.js";
import Icons from "../../Icons/Icons.js";

class DateField extends Field {

    constructor(text = "", name = "", placeholder = "") {
        super(text, name, placeholder);

        this.input = new InputDate();
        this.input.setAppearence("none");
        this.input.setWebkitAppearence("none");
        this.input.setDisplayWebkitCalendarPickerIndicator("none");
        this.holder.add(this.input);

        this.btn = new IconRoundButton(Icons.CALENDAR);
        this.btn.setBackgroundColor("transparent");
        this.btn.onClick((e) => this.openCalendar(e));
        this.holder.add(this.btn);

        this.loadStyles();

    }

    openCalendar(event) {
        event.stopPropagation();
        this.input.showPicker();
    }

}

export default DateField;