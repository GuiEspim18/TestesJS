import Input from "../Input";

declare class InputFile extends Input {
    constructor();
    
    setAccept(accept: string): void;

    setMultiple(multiple: boolean): void;

    setCapture(capture: 'user' | 'environment' | boolean): void;

    setWebkitdirectory(webkitdirectory: boolean): void;

    getFiles(): FileList | null;

    click(): void;
}

export default InputFile;