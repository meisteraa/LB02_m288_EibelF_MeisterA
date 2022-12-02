
var kurs = new Array();
kurs[0] = 1.95583;
kurs[1] = 6.55957;
kurs[2] = 1937.98450;
function umrechnen(f) { //f ist eine Referenz
                        //auf das Formular
   var betrag = f.betrag.value;
   if (betrag.indexOf(",")!=-1) {
      betrag = betrag.substring(0, betrag.indexOf(","))
      + "." +
               betrag.substring(betrag.indexOf(",")+1,
               betrag.length);
   }
   var faktor = kurs[f.Waehrung.selectedIndex];
   if (f.umrechnung[0].checked) {
      f.ausgabe.value = betrag / faktor;
   } else {
      f.ausgabe.value = faktor * betrag;
   }
}
//--></script>