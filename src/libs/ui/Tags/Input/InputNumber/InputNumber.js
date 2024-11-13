import InputTyped from "../InputTyped/InputTyped.js";

class InputNumber extends InputTyped {
    constructor() {
        super();
        this.tag.type = "number";
    }

    setMin(min) {
        this.tag.min = min;
    }

    setMax(max) {
        this.tag.max = max;
    }

    setStep(step) {
        this.tag.step = step;
    }

    setSpinButton(spinButton) {
        if (!spinButton) {
            this.tag.type = "text";
        
            this.tag.addEventListener("input", function(e) {

                this.value = this.value.replace(/[^0-9.-]/g, "");
         
                if (this.value.split("-").length > 2) {
                    this.value = this.value.replace(/(.+)(-+)/, "$1");
                }
                if (this.value.indexOf("-") > 0) {
                    this.value = this.value.replace("-", "");
                }
     
                var parts = this.value.split(".");
                if (parts.length > 2) {
                    this.value = parts[0] + "." + parts.slice(1).join("");
                }
            });
            
            this.tag.addEventListener("keydown", function(e) {
                if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                    e.preventDefault();
                }
            });
        }
    }
}

export default InputNumber;