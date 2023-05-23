// check grid / Spacechoose
var select = document.getElementById("spacechoose");
var element = document.getElementById("content");

// Rend visible avec un checkbox les effets de la propriétés align-content allier aux valeurs space between / around / evenly

select.addEventListener("change", function() {
var selectedOption = this.options[this.selectedIndex];
if (this.selectedIndex == 0) {
    element.classList.remove("space-around");
    element.classList.remove("space-evenly");
    element.classList.add("space-between");
    console.log(element.classList);
}
else if (this.selectedIndex == 1) {
    element.classList.remove("space-between");
    element.classList.remove("space-evenly");
    element.classList.add("space-around");
    console.log(element.classList);
}
else if (this.selectedIndex == 2) {
    element.classList.remove("space-around");
    element.classList.remove("space-between");
    element.classList.add("space-evenly");
    console.log(element.classList);
}
});


