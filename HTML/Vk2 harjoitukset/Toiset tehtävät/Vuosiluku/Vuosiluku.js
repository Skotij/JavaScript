function onkoKarkausvuosi(vuosi) {
  if ((onkoTasajako(vuosi, 4) &&
       !onkoTasajako(vuosi, 100)) ||
       onkoTasajako(vuosi, 400)) {
    return true;
  } else {
    return false;
  }
