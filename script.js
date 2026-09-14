console.log("Business Name Generator");

let adjective1 = "Crazy";
let adjective2 = "Amazing";
let adjective3 = "Fire";
let selected;

let num = Math.random() * 3;
if (num < 1) {
    selected = adjective1;
}
else if (num < 2) {
    selected = adjective2;
}
else {
    selected = adjective3;
}



let shop1 = "Engine";
let shop2 = "Foods";
let shop3 = "Garments";
let selectedShop;

let middle_num = Math.random() * 3;
if (middle_num < 1) {
    selectedShop = shop1;
}
else if (middle_num < 2) {
    selectedShop = shop2;
}
else {
    selectedShop = shop3;
}



let another1 = "Bros";
let another2 = "Limited";
let another3 = "Hub";
let selected_another;

let last = Math.random() * 3;
if (last < 1) {
    selected_another = another1;
}
else if (last < 2) {
    selected_another = another2;
}
else {
    selected_another = another3;
}
console.log(selected+ " " +selectedShop+ " " +selected_another);