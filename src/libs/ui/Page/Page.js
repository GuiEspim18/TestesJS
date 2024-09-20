class Page {
    content;

    constructor() {
        this.content = document.createElement("div");
    }

    load() {
        return this.content;
    }

    add(tag) {
        this.content.appendChild(tag.load());
    }
}

export default Page;