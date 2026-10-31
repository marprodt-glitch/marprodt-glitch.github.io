const messageAbove100 = "you are a cute faggot nigga";

let howGayAreYou = window.prompt("how gay are you? (0-100)");

while (howGayAreYou !== null && isNaN(howGayAreYou)) {
    window.alert("please enter a number");
    howGayAreYou = window.prompt("how gay are you? (0-100)");
}

if (howGayAreYou !== null) {
    window.setTimeout(() => {
        const areYouSure = window.confirm("are you sure?");

        if (areYouSure) {
            document.getElementById("free-candy-button").hidden = false;
            const percentage = Number(howGayAreYou);
            const result = document.getElementById("result");

            if (percentage < 1) {
                result.textContent = "stop lying fat faggot nigger black monkey jew that you are";
                document.getElementById("lying-picture").hidden = false;
            } else if (percentage > 100) {
                result.textContent = messageAbove100;
                document.getElementById("over100-picture").hidden = false;
            } else {
                result.textContent = "you are " + howGayAreYou + "% gay";

                if (percentage > 1) {
                    document.getElementById("picture").hidden = false;
                }
            }
        }
    }, 0);
}


