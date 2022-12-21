function positiivinenNegatiivinen()
  {
    var arvo;
    arvo = parseInt(document.getElementById('luku').value);
    document.write("Antamasi luku: " + arvo);
    if(luku>=0)
    {
      document.write("<br>Antamasi luku on negatiivinen");
    }
    else {
      document.write("<br>Antamasi luku on positiivinen");
    }
