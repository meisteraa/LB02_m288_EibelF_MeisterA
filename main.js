

let meinekurse = new Array();

function loadRates() {
    $.getJSON('daten.json', function (data) {
        meinekurse = data;});

}
  //  alert(meinekurse[0].name);
console.log(meinekurse[0]."fx")
//kurs[0] = 1.01492
//kurs[1] = 1.06247;
//kurs[2] = 144.606;
//kurs[3] = 0.87265;



function umrechnen(f) {
   let betrag = f.betrag.value;
   if (betrag.indexOf(",")!=-1) {
      betrag = betrag.substring(0, betrag.indexOf(","))
      + "." +
               betrag.substring(betrag.indexOf(",")+1,
               betrag.length);
   }
   let faktor = kurs[f.Waehrung.selectedIndex];
   if (f.umrechnung[0].checked) {
      f.ausgabe.value = betrag / faktor;
   } else {
      f.ausgabe.value = faktor * betrag;
   }
}
