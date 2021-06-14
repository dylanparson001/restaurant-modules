import background from "./images/bbq-background.jpg";
import './style.css';

const body = document.querySelector("#content");


export default class home {
    constructor() {

    }
    static newTitle() {

        const title = document.createElement("h1");
        title.textContent = "Fat Boy's Roadside BBQ"

        body.appendChild(title);
    }
    static newParagraph() {
        const body = document.querySelector("#content");
        const paragraph = document.createElement("article");
        paragraph.textContent = "Best BBQ in Tennesse!"

        body.appendChild(paragraph);
    }

    static makeHome(){
        this.newTitle();
        this.newParagraph();
    }
}