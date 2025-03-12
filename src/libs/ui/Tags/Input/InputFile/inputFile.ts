import Input from "../Input";

class InputFile extends Input {
    constructor() {
        super();
        (this.tag as HTMLInputElement).type = "file";
    }

    setAccept(accept: string) {
        (this.tag as HTMLInputElement).accept = accept;
    }

    setMultiple(multiple: boolean) {
        (this.tag as HTMLInputElement).multiple = multiple;
    }

    setCapture(capture: string) {
        (this.tag as HTMLInputElement).capture = capture;
    }

    setWebkitdirectory(webkitdirectory: boolean) {
        (this.tag as HTMLInputElement).webkitdirectory = webkitdirectory ;
    }

    getFiles() {
        return (this.tag as HTMLInputElement).files;
    }

    click() {
        this.tag.click();
    }
}

export default InputFile;