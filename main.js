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

if symbolComputer == symbolSpieler {alert ("unentschieden"); }