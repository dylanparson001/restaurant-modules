import navBar from "./nav";

const body = document.querySelector("#content");

export default class home {
    constructor() {

    }
    //creates the title
    static newTitle() {

        const title = document.createElement("h1");
        title.textContent = "Fat Boy's Roadside BBQ"
    
        body.appendChild(title);
    }
    static makeContainer (){
        
    }
    static newParagraph(text) {
        const body = document.querySelector("#content");
        const paragraph = document.createElement("p");
        paragraph.textContent = `${text}`;
        paragraph.classList.add("paragraphs");
        body.appendChild(paragraph);
    }

    static makeHome(){
        this.newTitle();
        this.newParagraph("Sugar's Ribs is for the purist BBQ fan. At Sugar's, we do our best to produce and serve freshly cooked meat like you would cook in your own back yard. We are more like an old-fashioned, roadside BBQ, but in a comfortable setting with a great view of the surrounding mountains and downtown Chattanooga.");
        this.newParagraph("Local restauranteurs, Lawton and Karen Haygood purchased the old Pancake Man Restaurant on the side of Missionary Ridge, to take advantage of one of the most spectacular views in all of Chattanooga. Originally part of the Kings Lodge Motel, they remodeled and opened Sugar's Ribs on March 1, 2007.");
        this.newParagraph("We do things a little differently at Sugar’s. We smoke spareribs (as opposed to baby back ribs) in the style of the old South. They are moist on the inside, and crunchy on the outside. They have more fat and are slow-smoked for tenderness but they have that rich flavor the barbecue purist is looking for. You won’t find boiled ribs covered with a thick, commercial sweet sauce at Sugar’s. Ditto for our pork butt. ");
        this.newParagraph("We rotisserie our chicken until nearly done and finish them over a hot hardwood fire. We chop our meat to order, maintaining as much flavor as possible. We keep our side dishes fresh and simple so they do not detract from the “stars of the show” – our meats. Check out our menu. We offer a selection of domestic and premium beers. We have seating in the dining area and on the heated deck. We have a terrific Rocola jukebox and sound system with all oldies, classics and blues.");
        this.newParagraph("We offer a 100 seat, banquet meeting room with its own deck. We rent and cater the room, offering our BBQ food products, soft drinks, tea, and beer. We offer full “off premise” BBQ catering.");
    
    }
}