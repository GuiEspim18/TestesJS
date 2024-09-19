class Page {
    content;

    constructor() {
        this.content = document.createElement("div");
    }

    load() {
        return this.content;
    }

    add(tag) {
        this.content.appendChild(tag);
    }
}

export default Page;