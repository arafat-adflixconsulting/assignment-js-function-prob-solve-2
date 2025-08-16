/* 
Problem-01 : Train TT's Fine Calculator 

⚠️ Function Name Must be totalFine()

ট্রেনের একজন TT হিসেবে কাজ করছেন রবিন। প্রতিদিন অসংখ্য যাত্রী টিকিট হারিয়ে ফেলেন কিংবা কাটেন ই না। টিকিটবিহীন যাত্রীদের জরিমানা করতে গিয়ে প্রতিবার ক্যালকুলেশন করতে অনেক সময় লাগে। তাই TT রবিন চায়, এমন একটি ফাংশন যেখানে যাত্রীর ট্রেন ভাড়া দিলেই জরিমানার নির্ভুল হিসাব চলে আসবে। 
তুমি যেহেতু প্রোগ্রামার , তাই তোমাকে রবিন সাহেবের জন্য  totalFine নামে একটা function তৈরী করে দিতে হবে।  
যেটা fare কে ইনপুট হিসেবে নেবে।  এবং fine ক্যালকুলেট করে return করবে। 

🧮 জরিমানা নির্ধারণের নিয়ম:
মোট জরিমানা = টিকিটের মূল ভাড়া + (২০% সারচার্জ) + অতিরিক্ত ৩০ টাকা সার্ভিস চার্জ
 */

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

let f = -150;
let vara = totalFine(f);
// console.log(vara);
// console.log(totalFine(200));

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/* Problem-02 : Clean & Capitalize Characters

⚠️ Function Name Must be onlyCharacter()
রাফি একজন উঠতি Ethical Hacker. 💻 সে প্রতিদিন নানা ধরণের এনক্রিপ্টেড তথ্য নিয়ে কাজ করে। সর্বশেষ এক মিশনে সে কিছু সিক্রেট বার্তা পায়, কিন্তু বার্তা গুলো তে মাঝখানে অনেক স্পেস, ছোট হাতের অক্ষর , বড় হাতের অক্ষর  এবং নানা রকম গ্যাপ থাকে। যা পড়তে দুর্ভেদ্য লাগে। 
রাফি চায়, সে যেন যেকোনো string ফরম্যাট করার জন্য একটি টুল বানাতে পারে, যা শুধুমাত্র  ক্যারেক্টার রেখে বাকিটুকু বাদ দিবে এবং সব ক্যাপিটাল লেটারে রূপান্তর করবে।   
তোমার কাজ হলো রাফির জন্য  onlyCharacter() নামের একটি ফাংশন তৈরি করা, যা যেকোনো স্ট্রিং ইনপুট থেকে শুধুমাত্র character বের করে সেই character গুলোর বড় হাতের সংস্করণ রিটার্ন করবে। */

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

// console.log(onlyCharacter("Cy   bar- At  tac k  "));

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/* Problem-03 : FIFA Best Team Award 

⚠️ Function Name Must be bestTeam()
ফুটবল খেলার মাঠে শুধু গোল নয়, ফাউল, হলুদ কার্ড, লাল কার্ডও খুব গুরুত্বপূর্ণ! 
দুইটি দল খেলেছে—তারা কে কত ফাউল করেছে, কয়টা হলুদ কার্ড ও লাল কার্ড পেয়েছে তা দেখে বিচারক ঠিক করবে কে বেশি ফেয়ার প্লে করেছে। 
তোমার কাজ হচ্ছে একটি ফাংশন বানানো, যার নাম হবে bestTeam(). 
এই ফাংশনটি দুইটি দলের খেলার রিপোর্ট (object আকারে) ইনপুট হিসেবে নেবে আর রিটার্ন করবে সেই দলের নাম যে সবচেয়ে কম নিয়ম ভেঙেছে অর্থাৎ বেশি ফেয়ার ছিল।  

👉 যেই দলের  foul + redCard + yellowCard এর পরিমান  কম → সেই দল বেশি ফেয়ার
 */

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

// console.log(
//   bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 }, "France")
// );

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/* Problem-04: Same Same But Different  😕 

⚠️ Function Name Must be isSame()
- তোমার কাজ হচ্ছে একটি ফাংশন তৈরি করা যার নাম হবে isSame()। 
- এই ফাংশনটি দুটি অ্যারে ইনপুট হিসেবে নেবে, 
- তারপর চেক করবে — এই দুইটি অ্যারে Same কিনা  
- যদি ২ টা  Array সেইম হয় তাহলে ফাংশন টি return করবে true ।  
- আর না হলে return করবে false ।
- ২ টা Array Same হবার শর্ত - 
🚩Array ২ টির length সমান হতে হবে।
🚩Array ২ টির  প্রতিটি index এর value exactly  same হতে হবে।
 */

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

// console.log(isSame({ data: [2, 5, 6] }, [2, 5, 6]));

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/* 
Problem-05: Exam Result Report Generator
⚠️ Function Name Must be resultReport()
তোমাকে resultReport() নামে একটা ফাংশন বানাতে হবে , যেটা একটি নাম্বারের Array ইনপুট হিসেবে নেবে (যেখানে একজন student এর  মার্কসগুলো থাকবে) 
এবং রিটার্ন করবে একটি object, যেখানে থাকবে ৩ টি প্রোপার্টি —
finalScore :  পরীক্ষার গড় নম্বর  |  pass: মোট কয়টি বিষয় পাস করেছে  |  fail: কয়টি বিষয় ফেল করেছে
মনে রাখতে হবেঃ  
👉 প্রতিটি সাবজেক্টে পাশ মার্ক হলো  40 
👉 finalScore কখনো দশমিক হবেনা। এটাকে rounded করে  পুর্ন সংখ্যায় রুপান্তর করতে হবে।    

 */

function resultReport(marks) {
  if (Array.isArray(marks) !== true) {
    return "Invalid";
  }
  let sum = 0;
  let passMarks = [];
  let failMarks = [];
  for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
    if (marks[i] >= 40) {
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

console.log(resultReport(100));
