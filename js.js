let other = document.getElementById("other");
let male = document.getElementById("male");
let female = document.getElementById("female");


function clicked() {
    if (other.checked == true) {
        alert(other.value);
    }
    if (male.checked == true) {
        alert(male.value);
    }
    if (female.checked == true) {
        alert(female.value);
    }
    if (other.checked == false && female.checked == false && male.checked == false) {
        alert("nothing is selected");
    }
}