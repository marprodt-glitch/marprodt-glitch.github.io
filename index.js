let howGayAreYou = window.prompt("how gay are you? (0-100)");

while (isNaN(howGayAreYou)) {
    window.alert("please enter a number");
    howGayAreYou = window.prompt("how gay are you? (0-100)");
}


let areyousure = window.confirm("are you sure?");




if (areyousure) {
document.write("you are " + howGayAreYou + "% gay");
if (Number(howGayAreYou) > 1) {
    document.write('<br><img src="b85246b4ee6f4a66819ce399938e3690tplv-jj85edgx6n-image-medium.png" alt="">');
}
}


