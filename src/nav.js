
export const navBar = () => {
    const mainDiv = document.querySelector("#content");
    const nav = document.createElement("nav");
    const list = document.createElement("ul");
    const listItems = new Array(3);
  
    for (let i = 0; i < 3; i++) {
      listItems[i] = document.createElement("li");
    }
  
    listItems[0].textContent = "Home";
    listItems[0].id = "home";
    listItems[1].textContent = "Menu";
    listItems[1].id = "menu";
    listItems[2].textContent = "Location";
    listItems[2].id = "location";
  
    for (let u = 0; u < 3; u++){
        list.append(listItems[u]);
    }
    nav.classList = "navBar";
    nav.append(list);
    mainDiv.append(nav);
  };
