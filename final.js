// Problem-01 : Train TT's Fine Calculator

function totalFine(fare) {
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  } else {
    const surcharge = fare * 0.2;
    const serviceCharge = 30;
    let fine = fare + surcharge + serviceCharge;
    return fine;
  }
}

// Problem-02 : Clean & Capitalize Characters

function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  } else {
    let isTrimed = str.trim();
    let spaceRemoved = isTrimed.replaceAll(" ", "");
    let accept = spaceRemoved.toUpperCase();
    return accept;
  }
}
