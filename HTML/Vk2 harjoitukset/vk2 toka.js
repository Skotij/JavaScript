function positiivinenNegatiivinen()
  {
    var arvo;
    arvo = parseInt(document.getElementById('luku').value);
    document.write("Antamasi luku: " + arvo);
    if(luku>=0)
    {
      document.write("Antamasi luku on positiivinen");
    }
    else {
      document.write("Antamasi luku on negatiivinen");
    }
