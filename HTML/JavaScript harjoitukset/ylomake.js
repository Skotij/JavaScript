function tulosta()
{
  var etunimi = document.getElementById('enimi').value;
  var sukunimi = document.getElementById('snimi').value;
  if (etunimi =="" || sukunimi =="")
  {
    alert("Et syöttänyt kaikkia tietoja. Ole hyvä aja syötä tiedot!");
  }
  else {
    document.getElementById('v1').innerHTML = "Hei " + etunimi + " " + sukunimi;
  }
}
