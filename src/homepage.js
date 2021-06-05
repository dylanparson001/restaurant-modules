export default class UI {
    constructor() {

    }

    static newTitle() {

        const body = document.querySelector("#content");
        const title = document.createElement("h1");
        title.textContent = "Memphis Street BBQ"

        body.appendChild(title);
    }
    static newParagraph() {
        const body = document.querySelector("#content");
        const paragraph = document.createElement("article");
        paragraph.textContent = "Best BBQ in Tennesse!"

        body.appendChild(paragraph);
    }
}
