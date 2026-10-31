let howGayAreYou = window.prompt("how gay are you? (0-100)");

while (isNaN(howGayAreYou)) {
    window.alert("please enter a number");
    howGayAreYou = window.prompt("how gay are you? (0-100)");
}


let areyousure = window.confirm("are you sure?");




if (areyousure) {
document.write("you are " + howGayAreYou + "% gay");
}


