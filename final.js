// Problem-01 : Train TT's Fine Calculator

function totalFine(fare) {
  const surcharge = fare * 0.2;
  const serviceCharge = 30;
  let fine = fare + surcharge + serviceCharge;
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  } else {
    return fine;
  }
}

// Problem-02 : Clean & Capitalize Characters
