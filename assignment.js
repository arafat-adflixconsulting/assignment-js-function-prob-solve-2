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
// console.log(totalFine(50));

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

// console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  "));
