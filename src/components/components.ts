import { Styles } from "../utils/types/styles/styles.types";
import { Tag } from "./tag";

export class Compontens {
    public p(styles: Styles = {}, content = "") {
        return new Tag(styles, "p").render(content);
    }
}