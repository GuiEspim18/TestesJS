import { Compontens } from "../../../src/components/components";
import { Content } from "../../../src/components/content";
import { Container } from "../../../src/utils/interfaces/container/container.interface";

export class Home implements Container {
    public html: Content = new Content();
    public components: Compontens = new Compontens();

    public p = this.html.add(this.components.p({ color: "red", fontSize: "2rem", fontFamily: "arial" }, "teste"));
    
    
    public roar (): string {
        return this.html.content;
    }
}