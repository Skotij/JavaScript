function viikonPäivät()
var päivä = 0;

switch (new Date().getDay()) {
  case 1:
    päivä = "Maanantai";
    break;
  case 2:
    päivä = "Tiistai";
    break;
  case 3:
    päivä = "Keskiviikko";
    break;
  case 4:
    päivä = "Torstai";
    break;
  case 5:
    päivä = "Perjantai";
    break;
  case 6:
    päivä = "Lauantai";
    break;
  case  7:
    päivä = "Sunnutai";
}
document.getElementById("").innerHTML = "Tänään on " + päivä;
