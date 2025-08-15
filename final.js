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

// Problem-03 : FIFA Best Team Award

function bestTeam(player1, player2) {
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  } else {
    let result1 = player1.foul + player1.cardY + player1.cardR;
    let result2 = player2.foul + player2.cardY + player2.cardR;
    if (result1 > result2) {
      return player2.name;
    } else if (result2 > result1) {
      return player1.name;
    } else if (result1 === result2) {
      return "Tie";
    }
  }
}

//Problem - 04 : Same Same But Different

function isSame(arr1, arr2) {
  if (Array.isArray(arr1) !== true || Array.isArray(arr2) !== true) {
    return "Invalid";
  }

  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

//Problem - 05 : Exam Result Report Generator

function resultReport(marks) {
  if (Array.isArray(marks) !== true) {
    return "Invalid";
  }
  let sum = 0;
  let passMarks = [];
  let failMarks = [];
  for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
    if (marks[i] > 40) {
      passMarks.push(marks[i]);
    } else {
      failMarks.push(marks[i]);
    }
  }

  if (marks.length === 0) {
    return { finalScore: 0, pass: 0, fail: 0 };
  }
  let avarageNumber = sum / marks.length;
  let finalScore = Math.round(avarageNumber);
  let pass = passMarks.length;
  let fail = failMarks.length;
  let result = { finalScore, pass, fail };
  return result;
}
