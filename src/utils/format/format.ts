export class Format {

    protected letter: string;

    constructor (letter: string) {
        this.letter = letter;
    }

    public isUpperCase(): boolean {
        return this.letter === this.letter.toUpperCase();
    }
}