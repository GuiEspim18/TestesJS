import InputTyped from "../InputTyped/InputTyped";

class InputNumber extends InputTyped {

    private value: number;

    constructor() {
        super();
        (this.tag as HTMLInputElement).type = "number";
    }

    setMin(min: number) {
        (this.tag as HTMLInputElement).min = String(min);
    }

    setMax(max: number) {
        (this.tag as HTMLInputElement).max = String(max);
    }

    setStep(step: number) {
        (this.tag as HTMLInputElement).step = String(step);
    }

    setSpinButton(spinButton: boolean) {
        if (!spinButton) {
            (this.tag as HTMLInputElement).type = "text";

            const tag: HTMLInputElement = this.tag as HTMLInputElement;
        
            this.tag.addEventListener("input", function(e) {


                    tag.value = tag.value.replace(/[^0-9.-]/g, "");
             
                    if (tag.value.split("-").length > 2) {
                        tag.value = tag.value.replace(/(.+)(-+)/, "$1");
                    }
                    if (tag.value.indexOf("-") > 0) {
                        tag.value = tag.value.replace("-", "");
                    }
         
                    var parts = tag.value.split(".");
                    if (parts.length > 2) {
                        tag.value = parts[0] + "." + parts.slice(1).join("");
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