let symbolComputer;
let symbolSpieler;
let anzahlRunden = 0;
let gewinneComputer = 0;
let gewinneSpieler = 0;
let gewinneBedingung = 3;

do{
    ausgedachteZahl = Math.random() * 3;
    ausgedachteZahl = Math.round(ausgedachteZahl + 0.5);

    if(ausgedachteZahl == 1){
        symbolComputer = "Schere"
    };

    if(ausgedachteZahl == 2){
        symbolComputer = "stein"
    };

    if(ausgedachteZahl == 3){
        symbolComputer = "papier"
    };

} while (gewinneSpieler < 3 && gewinneComputer < 3)


wahlSpieler = prompt("Schere ist 1, Stein ist 2 und Papier 3")
if(wahlSpieler == 1) (symbolSpieler = "Schere");
if(wahlSpieler == 2) (symbolSpieler = "Stein");
if(wahlSpieler == 3) (symbolSpieler = "papier");

if(symbolComputer == "schere" && symbolSpieler =="stein") {
    gewinneSpieler++;
    alert("Du gewinnst mit Schere")
}

if(symbolComputer == "schere" && symbolSpieler =="papier") {
    gewinneSpieler++;
    alert("Computer gewinnt mit Schere")
}

if(symbolComputer == "stein" && symbolSpieler =="schere") {
    gewinneSpieler++;
    alert("Computer gewinnt mit Stein")
}

if(symbolComputer == "stein" && symbolSpieler =="papier") {
    gewinneSpieler++;
    alert("Du gewinnst mit Stein")
}

if(symbolComputer == "papier" && symbolSpieler =="stein") {
    gewinneSpieler++;
    alert("Computer gewinnt mit Papier")
}

if(symbolComputer == "papier" && symbolSpieler =="schere") {
    gewinneSpieler++;
    alert("Du gewinnst mit Papier")
}while (gewinneSpieler < 3 && gewinneComputer < 3)

if(gewinneSpieler >=3) {
    alert("Du hast das Spiel gewonnen");
} else{
    alert("Der Computer war besser");
}

alert(gewinneSpieler + "zu" + gewinneComputer);