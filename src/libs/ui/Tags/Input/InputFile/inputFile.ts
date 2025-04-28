import Input from "../Input";

class InputFile extends Input {
    constructor() {
        super();
        (this.tag as HTMLInputElement).type = "file";
    }

    public setAccept(accept: string) {
        (this.tag as HTMLInputElement).accept = accept;
    }

    public setMultiple(multiple: boolean) {
        (this.tag as HTMLInputElement).multiple = multiple;
    }

    public setCapture(capture: string) {
        (this.tag as HTMLInputElement).capture = capture;
    }

    public setWebkitdirectory(webkitdirectory: boolean) {
        (this.tag as HTMLInputElement).webkitdirectory = webkitdirectory ;
    }

    public getFiles() {
        return (this.tag as HTMLInputElement).files;
    }

    public click() {
        this.tag.click();
    }
}

export default InputFile;