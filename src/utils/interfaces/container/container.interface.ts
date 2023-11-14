import { Compontens } from "../../../components/components";
import { Content } from "../../../components/content";

export interface Container {
    html: Content;
    components: Compontens;
    roar(): string;
}