import Field from "../Field.js"
import InputDate from "../../../ui/Tags/Input/InputDate/InputDate.js";
import IconRoundButton from "../../Buttons/IconRoundButton/IconRoundButton.js";
import Icons from "../../Icons/Icons.js";
import FieldType from "../FieldType.js";

class DateField extends Field {

    constructor(text = "", name = "", placeholder = "") {
        super(text, name, placeholder);

        this.type = FieldType.DATE;

        this.input = new InputDate();
        this.input.setAppearence("none");
        this.input.setWebkitAppearence("none");
        this.input.setDisplayWebkitCalendarPickerIndicator("none");
        this.holder.add(this.input);

        this.btn = new IconRoundButton(Icons.CALENDAR);
        this.btn.setBackgroundColor("transparent");
        this.btn.onClick(() => this.openCalendar());
        this.holder.add(this.btn);

        this.loadStyles();

    }

    openCalendar() {
        this.input.showPicker();
        this.focus();
    }

}

export default DateField;