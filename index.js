let howGayAreYou = window.prompt("how gay are you? (0-100)");

while (howGayAreYou !== null && isNaN(howGayAreYou)) {
    window.alert("please enter a number");
    howGayAreYou = window.prompt("how gay are you? (0-100)");
}

if (howGayAreYou !== null) {
    const areYouSure = window.confirm("are you sure?");

    if (areYouSure) {
        document.getElementById("result").textContent = "you are " + howGayAreYou + "% gay";

        if (Number(howGayAreYou) > 1) {
            document.getElementById("picture").hidden = false;
        }
    }
}


