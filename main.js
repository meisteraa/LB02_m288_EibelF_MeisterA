let fileInput = document.createElement('input');
fileInput.type = 'file';


fileInput.addEventListener('change', function(e) {
  
    let file = e.target.files[0];

    let reader = new FileReader(); //Objekt

 
    reader.addEventListener('load', function(e) {
       
        let result = e.target.result;

        jara=JSON.parse(result);
           
        //Zählt Währungen und packt sie in Array
           for (i = 0; i<=3; i++){
            kurs=jara.fxrates[i].fx;
           name=jara.fxrates[i].name;
           
           //Input Feld Eingabe
           let opt = document.createElement('option');
            opt.value = kurs;
            opt.innerHTML = name +" "+kurs;
           document.getElementById('box').appendChild(opt);
           }
    });

    // Datei auslesen
    reader.readAsText(file);
   
   
});

// dateiberarbeitung
document.body.appendChild(fileInput);
text=fileInput.textContent;

//Umrechnung
function berechnen(richtung)
{
  kurs=  document.getElementById('box').options[box.selectedIndex].value;
  betrag=document.getElementById('betrag').value;
  
  if (richtung=="vonCHF"){
    ergebnis =betrag*kurs;
  }
  else{
    ergebnis =betrag/kurs;
  }
  //alert(richtung+" "+betrag+" "+kurs+" "+ergebnis);
  document.getElementById('ausgabe').value=ergebnis;
}

