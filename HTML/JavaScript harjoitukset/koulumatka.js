function tarkasta()
{
  var etunimi = document.getElementById('enimi').value;
  var sukunimi = document.getElementById('snimi').value;
  var koulu = document.getElementsByName('kouluun');
  var pvalikko = document.getElementById('lempi');
  var valikonValittuArvo = pvalikko.options[pvalikko.selectedIndex].value;
  var kouluun = "";
  for(var i = 0; i < koulu.length; i++)
  {
    if(koulu[i].checked)
    {
      kouluun = koulu[i].value;
    }
  }
  if(etunimi.length < 1)
  {
    alert("Kirjoita etunimi, kiitos!");
  }
  else if(sukunimi.length < 1)
  {
    alert("Kirjoita sukunimi, kiitos!");
  }
  else if (kouluun.length < 1)
  {
    alert("Ole hyvä ja valitse, millä tulit kouluun, kiitos!");
  }
  else if(valikonValittuArvo.length < 1)
  {
    alert("Ole hyvä ja valitse lempituntisi koulussa, kiitos!")
  }
  else {
    alert("Kiitos tietojen täyttämisestä!");
    document.getElementById('v2').innerHTML = "Annoit seuraavat tiedot: <br>" + etunimi + " " + sukunimi + "<br />" + "Tulit tänään kouluun " + kouluun + "<br /> Ja pidät seuraavasta tunnista: " + valikonValittuArvo;
  }

}
