import home from "./homepage";

const body = document.querySelector("#content");

export default class menu {
  constructor() {}
  static makeMenu() {
    this.makeTable();
    //Make a table to show menu and prices
  }
  static makeTable() {
    const body = document.querySelector("#content");
    const title = document.createElement("h1");
    title.id = "title";
    const tableContainer = document.createElement("table");
    tableContainer.id = "menu-table";
    
    title.textContent = "Fat Boy's Roadside Eats Menu";

    this.newRow(tableContainer, "BBQ Ribs", "$14.99");
    this.newRow(tableContainer, "Honey BBQ Ribs", "$16.99");
    this.newRow(tableContainer, "Pork Belly Brisket", "$18.99");
    this.newRow(tableContainer, "Mashed Potatoes", "$3.99");
    this.newRow(tableContainer, "Tater Tots", "$2.99");
    this.newRow(tableContainer, "Crinkle Cut Fries", "$2.99");


    body.append(title);
    body.append(tableContainer);
  }
  static newRow(tableContainer, item, price) {
    const row = document.createElement("tr");
    const menuItem = document.createElement("td");
    const itemPrice = document.createElement("td");

    menuItem.textContent = item;
    itemPrice.textContent = price;

    row.appendChild(menuItem);
    row.appendChild(itemPrice);
    tableContainer.append(row);

  }
}
