var vragen = ["Parijs", "8", "IJsselmeer"];
var auto = ["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"];
var wadden = ["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"];

function controleer() {
    var punten = 0;
    var vraag1 = document.getElementById("ans1").value;
    var vraag2 = document.getElementById("ans2").value;
    var vraag3 = document.getElementById("ans3").value;
    var vraag4 = document.getElementById("ans4").value;
    var vraag5 = document.getElementById("ans5").value;

    if (vraag1 == vragen[0]) {
        document.getElementById("ans1");
        punten += 1;
    } else {
        document.getElementById("ans1");
    }

    if (vraag2 == vragen[1]) {
        document.getElementById("ans2");
        punten += 1;
    } else {
        document.getElementById("ans2");
    }

    if (vraag3 == vragen[2]) {
        document.getElementById("ans3");
        punten += 1;
    } else {
        document.getElementById("ans3");
    }

    if (auto.includes(vraag4)) {
        document.getElementById("ans4");
        punten += 1;
    } else {
        document.getElementById("ans4");
    }

    if (wadden.includes(vraag5)) {
        document.getElementById("ans5");
        punten += 1;
    } else {
        document.getElementById("ans5");
    }

    if (punten == 5) {
        document.getElementById("goedeantwoorden").innerHTML = "Alle antwoorden zijn correct!";
    } else {
        document.getElementById("goedeantwoorden").innerHTML = punten + " van de vijf antwoorden zijn goed!";
    }
}
