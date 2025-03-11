class UUID {

    public static generate(length: number = 25): string {
        const characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result: string = "";
        for (let i: number = 0; i < length; i++) {
            const randomIndex: number = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
        return result;
    }

}

export default UUID;