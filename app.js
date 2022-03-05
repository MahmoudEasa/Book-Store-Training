// References
// Random Element From Sequence
// إزاي نطلع عنصر عشوائي من الأراى

// Ahmed => Index 0
// Sayed => Index 1
// Ali => Index 2
// let arr = ["Ahmed", "Sayed", "Ali"];
// console.log(arr.length); // 3
// console.log(Math.random() * arr.length);
// console.log(Math.floor(Math.random() * arr.length));
// console.log(Math.trunc(Math.random() * arr.length));
// console.log(arr[Math.trunc(Math.random() * arr.length)]);





/* تطبيقات على HTML, CSS, JavaScript - توليد رقم متسلسل عشوائي */
/**
 * [1] Set Characters to Create The Serial
 * [2] Set Serial Characters Count
 * [3] Create Empty Variable To Store The Serial
 * [4] Create Random Number + Access Sequence
 * [5] Store The Random Element in The Empty Variable
 * [6] Loop x Count
 * [7] Change Serial Element Content With The Serial Variable
 */
// Global Variables
// let serial = document.querySelector(".serial");
// let btn = document.querySelector(".generate");
// btn.addEventListener("click", function ()
// {
//   let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let carsCount = 20;
//   let randomSerial = "";
//   for (let i = 0; i < carsCount; i++)
//   {
//     randomSerial += characters[Math.floor(Math.random() * characters.length)];
//   }
//   serial.innerHTML = randomSerial;
// })




// Create Our Work Filter
// تطبيقات على HTML, CSS, JavaScript - عرض قسم أعمالنا مع الفلتر
// الكود بتاعي
// let liAll = document.querySelectorAll(".switcher li");
// let liArray = Array.from(liAll);
// let imgAll = document.querySelectorAll(".gallery img");
// let imgArray = Array.from(imgAll);

// // console.log(liArray);
// for (let item of liArray)
// {
//   item.addEventListener("click", function ()
//   {
//     // Remove Active Class
//     for (let item of liArray)
//     {
//       item.classList.remove("active");
//     }
//     // Add Active Class
//     item.classList.add("active");
//     // Filter
//     for (let item of imgArray)
//     {
//       item.style.display = "none";
//     }

//     let dataSet = document.querySelectorAll(item.dataset.cat);
//     for (let item of dataSet)
//     {
//       item.style.display = "block";
//     }
//   })
// }

// الكود بتاع الزيرو
// let switcherLis = document.querySelectorAll(".switcher li");
// let imgs = Array.from(document.images);

// switcherLis.forEach((li) => {
//   li.addEventListener("click", removeActive);
//   li.addEventListener("click", manageImgs);
// });

// // Remove Active Class From All Lis And Add To Current
// function removeActive() {
//   switcherLis.forEach((li) => {
//     li.classList.remove("active");
//     this.classList.add("active");
//   });
// }

// // Manage Imgs
// function manageImgs() {
//   imgs.forEach((img) => {
//     img.style.display = "none";
//   });
//   document.querySelectorAll(this.dataset.cat).forEach((el) => {
//     el.style.display = "block";
//   });
// }




/* Random Background Color
  Practice
  - Random Background Color
*/
// #fd34f7 FF00FF
// let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// let colorParts = [];
// for (let i = 0; i < 6; i++) {
//   colorParts.push(hexArray[Math.floor(Math.random() * hexArray.length)]);
// }
// let finalColor = `#${colorParts.join("")}`;
// document.body.append(finalColor);
// document.body.style.backgroundColor = finalColor;



//تطبيقات على HTML, CSS, JavaScript - حساب عدد الأحرف في حقول الإدخال مع ملأ الحواف
            //Count Input Characters And Fill Borders
// let count = document.querySelector(".count");
// let progress = document.querySelector(".progress");
// let input = document.querySelector("input");
// let div = document.querySelector("div");
// let maxLength = input.getAttribute("maxlength");

// count.innerHTML = maxLength;
// input.addEventListener("input", function ()
// {
//   count.innerHTML = maxLength - this.value.length;
//   count.innerHTML == 0 ? count.classList.add("zero") : count.classList.remove("zero");
//   // Set The Progress
//   progress.style.width = `${(this.value.length * 100) / maxLength}%`;
// });
// let count = document.querySelector(".count");
// let progress = document.querySelector(".progress");
// let input = document.querySelector("input");
// let div = document.querySelector("div");
// let maxLength = input.getAttribute("maxlength");
// count.innerHTML = maxLength;
// input.oninput = function () {
//   count.innerHTML = maxLength - this.value.length;
//   count.innerHTML == 0 ? count.classList.add("zero") : count.classList.remove("zero");
//   // Set The Progress
//   progress.style.width = `${(this.value.length * 100) / maxLength}%`;
// };



// تطبيقات على HTML, CSS, JavaScript - عمل قائمة تنقل بملأ الشاشة
// Fullscreen Navigation
// Globale Variables
// let toggleN = document.querySelector(".toggle");
// let navN = document.querySelector("nav");
// let closeN = document.querySelector(".close");

// toggleN.addEventListener("click", toggleNav);
// closeN.addEventListener("click", closeNav);

// function toggleNav()
// {
//   navN.classList.toggle("open");
// }
// function closeNav()
// {
//   navN.classList.remove("open");
// }

// document.addEventListener("keyup", function (e)
// {
//   // console.log(e);
//   if (e.key === "Escape")
//   {
//     navN.classList.remove("open");
//   }
// })



// تطبيقات على HTML, CSS, JavaScript - عمل Countdown للوصول لتاريخ معين
// Create Countdown Timer

// Globale Variables
// let daysVar = document.querySelector(".days");
// let hoursVar = document.querySelector(".hours");
// let minutesVar = document.querySelector(".minutes");
// let secondsVar = document.querySelector(".seconds");

// // The End Of The Year Date To Countdown To
// // 1000 milliseconds = 1 Second
// let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
// // console.log(countDownDate)

// let counter = setInterval(() =>
// {
//   // Get Date Now
//   let dateNow = new Date().getTime();
  
//   // Find The Date Difference Between New And Countdown Date
//   let dateDiff = countDownDate - dateNow;
  
//   // Get Time Units
//   // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
//   let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
//   let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
//   let minutess = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
//   let seconds = Math.floor(dateDiff % (1000 * 60) / 1000);
//   daysVar.innerHTML = days < 10 ? `0${days}` : days;
//   hoursVar.innerHTML = hours < 10 ? `0${hours}` : hours;
//   minutesVar.innerHTML = minutess < 10 ? `0${minutess}` : minutess;
//   secondsVar.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

//   if (dateDiff <= 0)
//   {
//     clearInterval(counter);
//   daysVar.innerHTML = "0";
//   hoursVar.innerHTML = "0";
//   minutesVar.innerHTML = "0";
//   secondsVar.innerHTML = "0";
//   }
// }, 1000);



// تطبيقات على HTML, CSS, JavaScript - تغيير عرض العناصر عند الوصول للقسم
// Animate Width On Scrolling

// Globale Variables
// let sec = document.querySelectorAll("section");
// let secThree = document.querySelector(".three");
// let skills = document.querySelector(".skills");
// let progress = document.querySelectorAll(".progress span");

// window.addEventListener("scroll", function (e)
// {
// for (let item of sec)
// {
//   e.preventDefault();
//   const rect = item.getBoundingClientRect()

//     if (rect.top > -100 && rect.top < 250)
//     {
//       item.classList.add("active");
//     } else
//     {
//       item.classList.remove("active");
//     }
//   }
// })

// window.addEventListener("scroll", function (e)
// {
//   for (let item of progress)
//   {
//   e.preventDefault();
//   const rect = item.getBoundingClientRect()

//     if (rect.top > -100 && rect.top < 600)
//     {
//       item.style.width = item.getAttribute("data-width");
//     } else
//     {
//       item.style.width = "0";
//     }
//   }
// })



// تطبيقات على HTML, CSS, JavaScript - زيادة الأرقام عند الوصول للقسم
// Increase Numbers On Scrolling

// الكود بتاعي
// Global Variabels
// let sections = document.querySelectorAll("section");
// let secthree = document.querySelector(".three");
// let numsDiv = document.querySelectorAll(".nums .num");
// let started = false; // Function Started ? No

// // Add Active To Sections
// window.addEventListener("scroll", activeSec);
// function activeSec()
// {
//   for (let item of sections)
//   {
//     let rect = item.getBoundingClientRect();
//     if (rect.top > -100 && rect.top < 250)
//     {
//       item.classList.add("active");
//     } else
//     {
//       item.classList.remove("active");
//     }
//   }
// }

// // Increase Numbers On Scrolling
// window.addEventListener("scroll", increaseNum);
// function increaseNum()
// {
//   for (let item of numsDiv)
//   {
//     let nums = item.getAttribute("data-goal");
//     let rect = item.getBoundingClientRect();
//     if (rect.top > -100 && rect.top < 500)
//     {
//       if (!started)
//       {
//         let count = setInterval(() =>
//         {
//           item.innerHTML++;
//           if (item.innerHTML == nums)
//           {
//             clearInterval(count);
//           }
//           started = true;
//         }, 2000 / nums);
//       }
//     } else
//     {
//         item.innerHTML = "0";
//         started = false;
//     }
//     }
// }

// الكود بتاع الزيرو
// let nums = document.querySelectorAll(".nums .num");
// let section = document.querySelector(".three");
// let started = false; // Function Started ? No

// window.onscroll = function () {
//   if (window.scrollY >= section.offsetTop) {
//     if (!started) {
//       nums.forEach((num) => startCount(num));
//     }
//     started = true;
//   }
// };

// function startCount(el) {
//   let goal = el.dataset.goal;
//   let count = setInterval(() => {
//     el.textContent++;
//     if (el.textContent == goal) {
//       clearInterval(count);
//     }
//   }, 2000 / goal);
// }








// window.onload = function () {
//     document.querySelector("h1").style.color = "blue";
// }

// document.querySelector("h1").innerHTML = "Mahmoud Easa";
// const mm = document.createElement("div");
// mm.innerHTML = "Web";
// document.body.appendChild(mm);

// Directive %c بنضيفها علشان نحدد الكلام اللي عايزين نعمله استايل معين
// console.log("Hello From %cJs %cFile", "color: red; font-size: 40px", "color: blue; font-size: 40px")

// Data Types And Typeof Operator
// console.log(typeof [10, 15, 17]);
// console.log(typeof ["Os", "Ah", "Sa"]);
// console.log(typeof { name: "Osama", age: 17, county: "Eg" });


// Assignments From 1 To 9
// Assignment 1
// Create An Element h1 With Styling
// const div = document.createElement("div");
// div.setAttribute("class", "container");
// document.body.appendChild(div);
// const assignmentOne = document.createElement("h1");
// assignmentOne.innerHTML = "Elzero";
// assignmentOne.setAttribute("style",
//     "color: blue; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial");
// assignmentOne.setAttribute("id", "elzero");
// div.appendChild(assignmentOne);
// const id = document.querySelector("#elzero");
// id.innerHTML = "Hello, Elzero";

// Assignment 2
// Console Massage In The Console
// console.log("%cElzero %cWeb %cSchool", "color: red; font-size: 40px", "color: green; font-size: 40px; font-weight: bold", "background-color: blue; color: white; font-size: 40px; font-weight: bold")
// const assignmentTow = document.createElement("h2");
// assignmentTow.innerHTML = "Elzero Web School";
// assignmentTow.style.color = "red";
// div.appendChild(assignmentTow);

// Assignment 3
// Console Messages Group In The Console
// console.group("Group 1");
// console.log("Message One");
// console.log("Message Two");
// console.group("Child Group");
// console.log("Message One");
// console.log("Message Two");
// console.group("Grand Child Group");
// console.log("Message One");
// console.log("Message Two");
// console.groupEnd();
// console.groupEnd();
// console.groupEnd();
// console.group("Group 2");
// console.log("Message One");
// console.log("Message Two");

// let messageOne = `<ul>
//     <li style="margin: 10px 0; font-weight: bold; font-size: 30px; list-style: none">Group 1
//         <ul>
//             <li style="margin: 10px 0; font-weight: normal; font-size: 20px; list-style: none">Message One</li>
//             <li style="font-weight: normal; font-size: 20px; list-style: none">Message Two
//                 <li style="margin: 10px 0; font-weight: bold; font-size: 30px; list-style: none">Child Group
//                     <ul>
//                         <li style="margin: 10px 0; font-weight: normal; font-size: 20px; list-style: none">Message One</li>
//                         <li style="font-weight: normal; font-size: 20px; list-style: none">Message Two
//                             <li style="margin: 10px 0; font-weight: bold; font-size: 30px; list-style: none">Grand Child Group
//                                 <ul>
//                                     <li style="margin: 10px 0; font-weight: normal; font-size: 20px; list-style: none">Message One</li>
//                                     <li style="font-weight: normal; font-size: 20px; list-style: none">Message Two</li>
//                                 </ul>
//                             </li>
//                         </li>
//                     </ul>
//                 </li>
//             </li>
//         </ul>
//     </li>
//     <li style="font-weight: bold; font-size: 30px; list-style: none;">Group 2
//         <ul>
//             <li style="margin: 10px 0; font-weight: normal; font-size: 20px; list-style: none">Message One</li>
//             <li style="font-weight: normal; font-size: 20px; list-style: none">Message Two</li>
//         </ul>
//     </li>
// </ul>`;
// document.write(messageOne);

// Assignment 4
// Create A Table In Console
// console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"]);


// Assignments From 10 To 17
// Assignment 1
// let numberOne = 10;
// let numberTwo = 20;
// console.log(`${numberOne}${numberTwo}`);
// console.log(typeof `${numberOne}${numberTwo}`);
// console.log((numberOne.toString() + numberTwo.toString()));
// console.log(typeof (numberOne.toString() + numberTwo.toString()));
// console.log((numberTwo.toString()),"\n",(numberOne.toString()));
// console.log(`${numberTwo}\n${numberOne}`);

// Assignment 2
// console.log(elzero.innerHTML); // object
// console.log(typeof elzero); // object

// Assignment 3
// console.log("`I'm In \n \\\\ \n Love \\\\ \"\"\" ''' \n ++ With ++ \n \\\"\"\"\\\"\"\" \n \"\"JvaScript\"\"`` ")

// Assignment 4
// let a = 21;
// let b = 20;
// console.log("_"+a.toString()+"_"+b.toString()+a.toString()+"_"+b.toString()+a.toString()+"_"+b.toString()+a.toString()+"_"+b.toString()+"_")


// Assignments From 18 To 22
// Assignment 1



// Variable And Concatenation Challenge
// let titleName = "Elzero",
//     theDescription = "Elzero Web School",
//     theData = "25/10",
//     divContainer = `
//         <div class="container">
//             <h3>Hello ${titleName}</h3>
//             <p>${theDescription}</p>\n
//             <span>${theData}</span>
//         </div>
//     `;
// document.write(`${divContainer.repeat(4)}`);
// console.log(divContainer);

// Unary Plus And Negation Operators
// +
// console.log(+100);
// console.log(+"100");
// console.log(+"-100");
// console.log(+"Osama");
// console.log(+"15.5");
// console.log(+0xff);
// -
// console.log(-100);
// console.log(-"100");
// console.log(-"-100");
// console.log(-"Osama");
// console.log(-"15.5");
// console.log(-0xff);

// Assignment Operators
// let a = 10;
// a = a + 20;
// a += 100; // a = a + 100;
// a -= 50; // a = a - 50;

// console.log(a);

// Operators Challenges
// Challenge 1
// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++); // 100
// 11 + 20 + 80 - 10 = 101;
// console.log(++a + -b + +c++ - +a++ + +a); // 74
// 11 + -20 + 80 - 10 + 10 = 71;
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // 100
// 79 + 20 + 9 * 20 - 20 * 10 + 9 - 1 = 21,408;
// Challenge 2
// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// console.log(-d * +e); // 2000
// console.log(); // 173

/* Number Methods
    -- Two Dots To Call A methods
        يرجع الرقم استرينج
    -- toString() console.log((100).toString()); Or console.log(100..toString());
        يرجع اخر رقمين بعد النقطة وبيحول الرقم لاسترنج
    -- toFixed() console.log(100.5555555.toFixed(2)); = "100.56"
        بتحلل البيانات وبترجع الرقم صحيح ولازم يكون الرقم في الأول
    -- parseInt() console.log(parseInt("100.500 Osama")); = 100
        بتحلل البيانات وبترجع الرقم بالكسور ولازم يكون الرقم في الأول
    -- parseFloat() console.log(parseFloat("100.500 Osama")); = 100.5
    -- isInteger() [ES6] console.log(Number.isInteger("100")); false هل هو عدد صحيح
    -- isInteger() [ES6] console.log(Number.isInteger(100.500)); false هل هو عدد صحيح
    -- isInteger() [ES6] console.log(Number.isInteger(100)); true هل هو عدد صحيح
    -- isNaN() [ES6] console.log(Number.isNaN("Osama" + 20)); true [Is This Not A Number]
*/

/*
    -- Math Object
        بيرجع رقم صحيح وبيقرب الرقم لو تحت النصف بيبقى صفر لو في النصف أو أعلى بيبقى واحد
    -- round() console.log(Math.round(99.2)) = 99;
    -- round() console.log(Math.round(99.5)) = 100;
        بيرجع رقم صحيح وبيقرب الرقم لفوق بيبقى واحد مهما كان العدد
    -- ceil() console.log(Math.ceil(99.2)) = 100;
        بيرجع رقم صحيح وبيقرب الرقم لتحت بيبقى صفر مهما كان العدد
    -- floor() console.log(Math.floor(99.9)) = 99;
    -- min() console.log(Math.min(10, 20, 100, -100, 90)); = -100 بيرجع أقل رقم في المجموعة
    -- max() console.log(Math.max(10, 20, 100, -100, 90)); = 100 بيرجع أعلى رقم في المجموعة
    -- pow() console.log(Math.pow(2, 4)); = 16 [2 ** 4] أثنين أس أربعة
    -- random() console.log(Math.random()); بتجيب رقم عشوائي
    -- trunc() [ES6] console.log(Math.trunc(99.5)); = 99 بيرجع العدد الصحيح
*/

// Number Challenge
// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// find Smallest Number in All Variables And return Integer
// console.log(Math.round(Math.min(a, b, c, d))); // 2 [بيرجع أقل رقم ويكون عدد صحيح]

// Use Variable a + b One Time To Get TheNeeded Output
// console.log(Math.pow(a, b-198.5)); // 10000

// Get Integer "2" From d Variable With 4 Methods
// console.log(Math.round(d)); // 2
// console.log(Math.trunc(d)); // 2
// console.log(Math.floor(d)); // 2
// console.log(Math.min(d-.4)); // 2

// Use Variables b + d To Get This Values
// console.log(); // 66.67 => String
// console.log(); // 67 => Number

/*
    String Methods
    -- Access With Index
    -- Access With charAt()
    -- length
    -- trim() بتشيل المسافات من الأول والآخر
    -- toUpperCase()
    -- toLowerCase()
    -- Chain Methods
*/
// let theName = "  Ahmed  ";
// console.log(theName);
// console.log(theName.trim().charAt(2).toUpperCase());
// console.log(theName.toUpperCase());
// console.log(theName.toLowerCase());
// console.log(theName.trim());
// console.log(theName[1]);
// console.log(theName.charAt(1));
// console.log(theName.length);

/*
    String Methods Part 2
    -- indexOf(Value [Mand إختصار إجباري ], Start [Opt إختصار إختياري ] 0)
    -- lastIndexOf(Value [Mand], Start [Opt] Length)
    -- slice(Start [Mand], end [Opt] Not Include End) بتاخد قطعة من البيتزا
    -- repeat(Times) [ES6]
    -- split(Separator [Opt], Limit [Opt])
*/
// let inOf = "Elzero Web school Web";
// console.log(inOf.indexOf("Web"));
// console.log(inOf.indexOf("Web", 8));
// console.log(inOf.lastIndexOf("Web"));
// console.log(inOf.lastIndexOf("Web", 8));
// console.log(inOf.slice(0, 6)); // مش بياخد آخر رقم
// console.log(inOf.slice(-10, -4)); // مش بياخد آخر رقم
// console.log(inOf.repeat(4));
// console.log(inOf.split(" ")); // مثلاً (ورقه قصتها بمقص أصبحت ورقتين) وبيرجع [أراى]
// console.log(inOf.split(" ", 2)); // مثلاً (ورقه قصتها بمقص أصبحت ورقتين) وبيرجع [أراى]

/*
    String Methods Part 3
        يعني ناخد استرينج من الأسترينج الرئيسي نأخذ منه قطعه
    -- substring(Start [Mand], End [Opt] Not Including End)
    ---- Start > End Will Swap
    ---- Start < 0 It Start From 0 لما القيمة تكون بالسالب بيبدء من الصفر
    ---- Use Length To Get Last Character
        اديله استرينج واقوله هل هو يحتوي  على الكلمه دي ولا لا
    -- includes(Value [Mand], Start [Opt] Defoult 0) [ES6]
    -- startWith(Value [Mand], Start [Opt] Defoult 0) [ES6]
    -- endsWith(Valu3e [Mand], Length [Opt] Defoult Full Length) [ES6]
*/
// let a = "Elzero Web School";
// console.log(a.length);
// console.log(a.substring(7, 10));
// console.log(a.substring(10, 7)); // نفس النتيجة
// console.log(a.substring(a.length - 1)); // آخر حرف
// console.log(a.substring(a.length - 5, a.length - 3));

// console.log(a.includes("Web")); // هل يحتوي على كلمة ويب
// console.log(a.includes("Web", 8)); // هل يحتوي على كلمة ويب

// console.log(a.startsWith("Elzero")); // هل يبدأ بحرف أو كلمه معينة
// console.log(a.startsWith("e", 3)); // هل يبدأ بحرف أو كلمه معينة

// console.log(a.endsWith("l")); // هل بنتهي بحرف أو كلمه معينة
// (Search in lenght Not index) هل بنتهي بحرف أو كلمه معينة
// console.log(a.endsWith("o", 6));

// String Challenge
// let a = "Elzero Web School";
// Include This Methods In Your Slution [slice, charAt]
// console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// 8 H
// console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
// console.log(a.split(" ", 1)); // [Elzero]

// Use Only "substr" Method + Template Literals In Your Solution
// console.log(a.substring(`${(0, 6)}`,`${a.length-7}`)); // Elzero School
// console.log(a.length)
// Solution Must Be Dynamic And String May Change
// console.log(a.charAt(0).toLowerCase() + a.slice(1, 16).toUpperCase() + a.charAt(16).toLowerCase()); // eLZERO WEB SCHOOl


/* Comparison Operators
    -- == Equal [Compare Value Only]
    -- != Not Equal

    -- === Identical [Compare Value And Type]
    -- !== Not Identical

    -- > Larger Than
    -- >= Larger Than Or Equal

    -- < Smaller Than
    -- <= Smaller Than Or Equal
*/

/* Logical Operators
    -- ! Not
    -- && And
    -- || Or
*/

/* If conditions
    -- Control Flow
    --- if
    --- else if
    --- else

    -- if (Condition) {
        // Block Of Code
    }
*/
// let price = 100;
// let discout = false;
// let discoutAmount = 30;
// let country = "KSA";

// if (discout === true)
// {
//     price -= discoutAmount;
// } else if (country === "Egypt")
// {
//     price -= 40;
// } else if (country === "Syria")
// {
//     price -= 50;
// } else
// {
//     price -= 10;
// }
// console.log(price);


/* Nested If Condition
    Nested If
*/
// let price = 100;
// let discout = false;
// let discoutAmount = 30;
// let country = "Egypt";
// let student = true;

// if (discout === true)
// {
//     price -= discoutAmount;
// } else if (country === "Egypt")
// {
//     if (student === true)
//     {
//         price -= discoutAmount + 30;
//     } else
//     {
//         price -= discoutAmount + 10;
//     }
// } else
// {
//     price -= 10;
// }
// console.log(price);


// تكليف من 33 إلى 37
// Test Case 1
// let num = 9; // "009"

// if (num < 10)
// {
//     console.log('00' + num);
// }

// Test Case 2
// let num = 20; // "020"

// if (num > 10 && num < 100)
// {
//     console.log("0" + num);
// }

// Test Case 3
// let num = 110; // "110"

// if (num >= 100)
// {
//     console.log(num);
// }


// let num1 = 9;
// let str = "9";
// let str2 = "20";

// Output
// "{num1} Is The Same Value As {str}"
// "{num1} Is The Same Value As {str} But Not The Same Type"
// "{num1} Is Not The Same Value Or The Same Type As {str2}"
// "{str} Is The Same Type As {str2} But Not The Same Value"

// if (num1 == str)
// {
//     console.log("{num1} Is The Same Value As {str}");
// }
// if (num1 !== str)
// {
//     console.log("{num1} Is The Same Value As {str} But Not The Same Type");
// }


/* Conditional Ternary Operator
    Conditional (Ternary) Operator
*/
// let theName = "Mona";
// let theGender = "Female";
// let theAge = 30;

// if (theGender === "Male")
// {
//     console.log("Mr");
// } else
// {
//     console.log("Mrs");
// }

// Condition ? If True : If False
// theGender === "Male" ? console.log("Mr") : console.log("Mrs"); // If المختصرة

// let result = theGender === "Male" ? "Mr" : "Mrs"; // Save If In Variable

// document.write(result);

// console.log(theGender === "Male" ? "Mr" : "Mrs");

// console.log(`Hello ${result} ${theName}`);

// theAge < 20
//     ? console.log(20)
//     : theAge > 20 && theAge < 60
//     ? console.log("20 To 60")
//     : theAge > 60
//     ? console.log("Larger than 60")
//     : console.log("Unknown");


/* Nullish Coalescing Operator And Logical Or
    Logical Or ||
    -- Null + Undefined + Any falsy Value
    Nullish Coalescing Operator ??
    -- Null + Undefined
*/

// let price = 100;
// console.log(`The Price Is ${price || 200}`);
// console.log(`The Price Is ${price ?? 200}`);


// If Condition challenge

// let a = 10;
// if (a < 10)
// {
//     console.log(10);
// } else if (a >= 10 && a <= 40)
// {
//     console.log("10 To 40");
// } else if (a > 40)
// {
//     console.log("> 40");
// } else
// {
//     console.log("Unknown");
// }
// a < 10
//     ? console.log(10)
//     : a >= 10 && a <= 40
//     ? console.log("10 To 40")
//     : a > 40
//     ? console.log("> 40")
//     : console.log("Unknown");

// Write With Ternary If Syntax
// let st = "Elzero Web School";
// console.log(st.length + st.length);
// console.log(st.repeat(2).length);
// console.log(st.toLocaleLowerCase());

// if (st.repeat(2).length.toString() === "34")
// {
//     console.log("Good");
// }

// W Poition May Cange
// if (st.toLocaleLowerCase().includes("w") === "w")
// {
//     console.log("Good");
// }

// if ("????" !== "string")
// {
//     console.log("Good");
// }

// if ("????" === "number")
// {
//     console.log("Good");
// }

// if ("????" === "ElzeroElzer")
// {
//     console.log("Good");
// }


/* Switch Statement
    Switch(expression) {
        Case 1:
            // Code Block
            break;
        Case 2:
            // Code Block
            break;
        Default:
            //Code Block
    }
        Default Ordering
        Multiple Match
        ===
*/

// let day = 2;

// switch (day)
// {
//     case 0:
//         console.log("Saturday");
//         break;
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//     case 3:
//         console.log("Munday");
//         break;
//     default:
//         console.log("Unknown Day");
// }


/* Switch And If Condition challenge
    Switch Challenge
*/
// let job = "Support";
// let salary = 0;

// if (job === "Manager") {
//   salary = 8000;
// } else if (job === "IT" || job === "Support") {
//   salary = 6000;
// } else if (job === "Developer" || job === "Designer") {
//   salary = 7000;
// } else {
//   salary = 4000;
// }

// switch (job)
// {
//     case "Manager":
//         salary = 8000;
//         break;
//     case "IT":
//     case "Support":
//         salary = 6000;
//         break;
//     case "Developer":
//     case "Designer":
//         salary = 7000;
//         break;
//     default:
//         salary = 4000;
// }
// console.log(salary);

// If Challenge
// let holidays = 5;
// let money = 0;

// if (holidays === 0)
// {
//     money = 5000;
// } else if (holidays === 1 || holidays === 2)
// {
//     money = 4000;
// } else if (holidays === 3)
// {
//     money = 3000;
// } else if (holidays === 4)
// {
//     money = 2000;
// } else if (holidays === 5)
// {
//     money = 1000;
// } else
// {
//     money = 0;
// }
// console.log(`My Mondy is ${money}`);

// holidays === 0
//     ? money = 5000
//     : holidays === 1 || holidays === 2
//         ? money = 4000
//         : holidays === 3
//             ? money = 3000
//             : holidays === 4
//                 ? money = 2000
//                 : holidays === 5
//                     ? money = 1000
//                     : money = 0;
// console.log(money);
// switch (holidays) {
//   case 0:
//     money = 5000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 1:
//   case 2:
//     money = 3000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 3:
//     money = 2000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 4:
//     money = 1000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 5:
//     money = 0;
//     console.log(`My Money is ${money}`);
//     break;
//   default:
//     money = 0;
//     console.log(`My Money is ${money}`);
// }


/**
 * Arrays
    * Create Arrays [Two methods] new Array() + []
    * Access Arrays Elements
    * Nested Arrays
    * Change Arrays Elements
    * Check for Array Array.isArray(arr);
 */
// let myFriends = ["Ahmed", "Mohamed", "sayed", ["Marwan", "Ali"]];
// console.log(`Hello ${myFriends[0]}`);
// console.log(`Hello ${myFriends[1]}`);
// console.log(`Hello ${myFriends[2]}`);
// console.log(`Hello ${myFriends[1][2]}`);
// console.log(`Hello ${myFriends[3][1][2]}`);

// console.log(myFriends);
// myFriends[2] = "Mahmoud";
// console.log(myFriends[3]);
// myFriends[3] = ["Gamal", "Sayd"];
// console.log(myFriends[3]);

// console.log(Array.isArray(myFriends));


/**
 * Using Length With Array
    * Arrays Methods
        * Length
 */
// Index Start From 0 [0, 1, 2, 3]
// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

// console.log(myFriends.length);// 4
// myFriends[6] = "Gamal"; 7
// myFriends.push("Gamal");
// myFriends[myFriends.length - 1] = "Mahmoud"; // Replace Gamale To Mahmoud تغيير آخر عنصر
// console.log(myFriends);
// myFriends.length = 3;
// console.log(myFriends);
// console.log(myFriends.length);


/**
 * Add And Remove From Array
    * Arrays Methods [Adding And Removing]
        * unshift("", "") Add Element To The First
        * push("", "") Add Element to The End
        * shift() Remove First Element From Array
        * pop() Remove Last Element From Array
 */
// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa",];
// myFriends.unshift("Mona", "Hala", "Samah", "Mahmoud");
// myFriends.push("Mona", "Hala", "Samah", "Mahmoud");
// let first = myFriends.shift();
// let last = myFriends.pop();

// console.log(myFriends);
// console.log(`First Name Is ${first}`);
// console.log(`Last Name Is ${last}`);


/**
 * Searching Array
    * Arrays Methods [Search]
        * indexOf(Search element, From Index [Opt])
        * lastIndexOf(Search element, From Index [Opt])
        * includes(valueToFind, fromIndex [Opt]) [ES7]
 */
// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];
// console.log(myFriends);
// console.log(myFriends.indexOf("Ahmed"));
// console.log(myFriends.indexOf("Ahmed", 2));
// console.log(myFriends.lastIndexOf("Ahmed"));
// console.log(myFriends.lastIndexOf("Ahmed", 2));
// console.log(myFriends.includes("Ahmed"));
// console.log(myFriends.includes("Mohamed", 2));
// if (myFriends.includes("Osama")){
//     console.log("Not Found");
// }
// if (myFriends.indexOf("Osama") === -1){
//     console.log("Not Found");
// }


/**
 * Sorting Arrays
    * Arrays Methods [Sort]
        * sort(Function [Opt])
        * reverse
 */
// let myFriends = [10, "Sayed", "Mohamed", "90", 1000, 100, 20, "10", -20, -10];

// console.log(myFriends);
// console.log(myFriends.sort().reverse());
// console.log(myFriends.sort()); // يرتب أبجدياً سالب و 1,2,3,4 و أ,ب,ت
// console.log(myFriends.reverse()); // بتعكس الأراي


/**
 * Siicing Array
    * Arrays Methods [Slicing]
        * slice(Start [Opt], End [Opt] Not Including End)
            * slice() => All Array
            * If Start Is Undefined => 0
            * Negative Count From End
            * If end Is Undefined || > Indexes => Slice To The End Array.length
            * Return New Array
        * splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
            * If Negative => Start From The End
 */
// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];

// console.log(myFriends);
// console.log(myFriends.slice(1, -2)); // Return New Array
// console.log(myFriends.splice(1, 4,  "Sameer", "Samara", "Samarmr")); // Edit In My Array بتحذف 4 عناصر وبتضيف 3 عناصر
// console.log(myFriends);
// console.log(myFriends.splice(1, 0, "Sameer", "Samara", "Samarmr")); // Edit In My Array بتضيف 3 عناصر ولا تحذف شيء
// console.log(myFriends);


/**
 * Joining Arrays
    * Arrays Methods [Joining]
        * concat(array, array) => Return A New Array بتضيف أكثر من أراى في ارى جديد
        * join(Separator) بيرجع الأراي استرينج وفاصل بينهم اللي بضيفه
 */
// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// let myNewFriends = ["Samar", "Sameh"];
// let schoolFriends = ["Haytham", "Shady"];
// let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gameel", [1, 2], {mm: 12, nn: "mmm"});

// console.log(myFriends);
// console.log(allFriends);
// console.log(allFriends.join(" "));
// console.log(allFriends.join(" @ "));
// console.log(allFriends.join("|"));
// console.log(allFriends.join(" ").toUpperCase());


/**
 * Array Challenge 
 */
// let zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
// my.length = 4;
// console.log(my.reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];
// console.log(my.slice(1, counter).reverse()); // ["Elham", "Mazero"]
// console.log(my.concat("Elzero").slice(-1).toString()); // "Elzero"
// console.log((my[5][4])+(my[3][0])); // "rO"


/**
 * Loop - For And Concept Of Loop
    * Loop
        * For
    for ([1] [2] [3]) {
        //Block Of Code
    }
 */

// for (let i = 0; i < 10; i++)
// {
//     console.log(i);
// }


/**
 * Looping On Sequences
    * Loop
        * Loop On Sequences
 */

// let myFriends = [1, 2, "Ahmed", "Mazero", "Elham", "Osama", "Ameer"];

// let onlyNames = [];
// let onlyNumber = [];
// for (let i = 0; i < myFriends.length; i++)
// {
//     if (typeof myFriends[i] === "string")
//         {
//             onlyNames.push(myFriends[i]);
//         } else
//         {
//             onlyNumber.push(myFriends[i]);
//         }
// }
// console.log(onlyNames);
// console.log(onlyNumber);
// for (let item of myFriends)
// {
//     if (typeof item === "string")
//     {
//         onlyNames.push(item);
//     } else
//     {
//         onlyNumber.push(item);
//     }
// }
// console.log(onlyNames);
// console.log(onlyNumber);
// for (let i = 0; i < myFriends.length; i++)
// {
//     console.log(myFriends[i]);
// }
// for (let item of myFriends)
// {
//     console.log(item);
// }


/**
 * Nested Loops And Trainings
    * Loop
        * Nested Loops
 */
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let colors = ["Red", "Green", "Black"];
// let models = [2020, 2021];

// for (let i = 0; i < products.length; i++)
// {
//     console.log("#".repeat(15));
//     console.log(`# ${products[i]}`);
//     console.log("#".repeat(15));
//     console.log("Colors: ");
//     for (let x = 0; x < colors.length; x++)
//     {
//         console.log(` - ${colors[x]}`);
//     }
//     console.log("Models: ");
//     for (let y = 0; y < models.length; y++)
//     {
//         console.log(` - ${models[y]}`);

//     }
// }


/**
 * Loop Control - Break, Continue, Lable
    * Loop Control
        * Break // يوصل عند القيمة ويقف
        * Continue // يشيل القيمة ويكمل
        * Lable // [mainLoop:], [nestedLoop:] يخلينا نتحكم في اللوب الأصلي من اللوب الفرعي
 */

// let products = ["Keyboard", "Mouse", 10, 20, "Pen", "Pad", 30, 40, "Monitor"];
// let colors = ["Red", "Green", "Black"];

// mainLoop: for (let i = 0; i < products.length; i++)
// {
//     if (typeof products[i] === "number")
//     {
//         continue; // يشيل القيمة ويكمل
//     }
//     console.log(products[i]);  // لازم يبقى تحت الشرط علشان الأرقام لا تنطبع
//     nestedLoop: for (let j = 0; j < colors.length; j++)
//     {
//         if (colors[j] === "Black")
//         {
//             break mainLoop;
//         }
//         console.log(`- ${colors[j]}`);
//     }
// }
// for (let i = 0; i < products.length; i++)
// {
//     if (typeof products[i] === "number")
//     {
//         continue; // يشيل القيمة ويكمل
//     }
//     console.log(products[i]);  // لازم يبقى تحت الشرط علشان الأرقام لا تنطبع
// }
// for (let i = 0; i < products.length; i++)
// {
//     console.log(products[i]);  // الترتيب مهم كونسول فوق يطبع بين لو تحت الشرط لا يطبع بين
//     if (products[i] === "Pen")
//     {
//         break; // يوصل عند القيمة ويقف
//     }
// }


/**
 * Loop - For Advanced Example
 */

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let i = 0;
// for (;;)
// {
//     console.log(products[i]);
//     i += 2; // يطبع واحده ويسيب واحده

//     if (i === products.length) break;
// }


/**
 * Practice - Add Products To Page
    * Products Practice
 */
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let colors = ["Red", "Green", "Black"];

// let showCount = 3;

// document.write(`<h1>Show ${showCount} Products</h1>`);

// for (let i = 0; i < showCount; i++)
// {
//     document.write(`<div style="padding-left: 50px;">`);
//     document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
//     for (let x = 0; x < colors.length; x++)
//     {
//         document.write(`<p style="padding-left: 30px;">- ${colors[x]}</p>`)
//     }
//     document.write(`<p style="padding-left: 30px;">- ${colors.join(" | ")}</p>`)
//     document.write(`</div>`);
// }


/**
 * Loop - While
    * Loop
        * While
 */
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

// let index = 0;
// while (index < products.length)
// {
//     console.log(products[index]);
//     index++;
// }


/**
 * Loop - Do While
    * Loop
        * Do / While
 */
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

// let i = 0;

// do
// {
//     console.log(i);
//     i++;
// } while (false);

// console.log(i);


/**
 * Loop - Challenge                         غير مكتمل
 */
// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];
// let number = myAdmins.length;
// let letter = myEmployees.map(y => y[0]);

// document.write(`<div>We Have X Admins</div>`);
// document.write(`<div>`);
// document.write(`<p>We Have ${number - 2} Admins</p>`);
// for (let x = 0; x < number; x++)
// {
//     if (myAdmins[x] === "Stop")
//     {
//         break;
//     }
//         // console.log(x + 1);
//         document.write(`<hr>`);
//         document.write(`<p>The Admin For Team ${x + 1} Is ${myAdmins[x]}</p>`);
//         document.write(`<h3>Team Members</h3>`);
//     for (let i = 0; i < myEmployees.length; i++)
//     {
//         if (myEmployees[i].startsWith("A") === true && myAdmins[x].startsWith("A") === true)
//         {
//             // myAdmins[0] = myEmployees[i];
//             // console.log(myEmployees[i]);
//             document.write(`<p>${i + 1}- ${myEmployees[i]}</p>`);
//         } else if (myEmployees[i].startsWith("O") === true && myAdmins[x].startsWith("O") === true)
//         {
//             // console.log(myEmployees[i]);
//             myAdmins[1] = myEmployees[i];
//             document.write(`<p>${i + 1}- ${myEmployees[i]}</p>`);
//         } else if (myEmployees[i].startsWith("S") === true && myAdmins[x].startsWith("S") === true)
//         {
//             // console.log(myEmployees[i]);
//             myAdmins[2] = myEmployees[i];
//             document.write(`<p>${i + 1}- ${myEmployees[i]}</p>`);
//         }
//     };
//     document.write(`</div>`);

// };

/**
 * Function Intro And Basic Usage
    * Function
        * What Is Function ?
        * User-Defined Vs Built In
        * Syntax + Basic Usage
        * Example From Real Life
        * Paarameter + Argument
        * Practical Example
 */

// function sayHello(userName)
// {
// console.log(`Hello ${userName}`);
// }
// userName = "Mohamed";
// myAge = 31;
// sayHello(userName, myAge);
// sayHello("Osama");
// sayHello("Sayed");
// sayHello("Ali");


/**
 * Function Advanced Examples
 */

// function sayHello(userName, age)
// {
//     if (age < 20)
//     {
//         console.log(`App is Not Suitable For You`);
//     } else
//     console.log(`Hello ${userName} Your Age Is: ${age}`);
//     {

//     }
// }
// sayHello("Osama", 38);
// sayHello("Sayed", 40);
// sayHello("Ali", 18);

// function generageYears(start, end, exclude)
// {
//     for (let i = start; i <= end; i++)
//     {
//         if (i === exclude)
//         {
//             continue;
//         }
//         console.log(i);


//     }
// }
// generageYears(1982, 2021, 2020);


/**
 * Function Return And Use Cases
    * Function
        * Return
        * Automatic Semicolun Insertion [No Line Terminatur Allowed]
        * Interruptting
 */

// function sayHello(userName)
// {
//     return `Hello ${userName}`;
// }

// console.log(sayHello("Osama"));
// let result = sayHello("Osama");
// console.log(result);

// function calc(num1, num2)
// {
//     return num1 + num2;
// }
// let result = calc(10, 200);
// console.log(result + 200);

// function generate(start, end)
// {
//     for (let i = start; i <= end; i++)
//     {
//         if (i === 15)
//         {
//             return `Interruptting`;
//         }
//         console.log(i);
//     }
// }
// generate(1, 20);


/**
 * Function Defoult Parameters
    * Function
        * Defoult Function Parameters
        * Function Parameters Defoult [Undefined]
        * Old Strategies [Condition + Logical Or]
        * ES6 Method
 */

// function sayHello(userName = "Unknown", age = "Unknown")
// {
// if (age === undefined)
// {
//     age = `Test`;
// }
// age = age || "Test";
//     return `Hello ${userName} Your Age Is: ${age}`;

// }
// console.log(sayHello("Osama"));


/**
 * Function Rest Parameters
    * Function
        * Rest Parameters
        * Only One Allowed
        * Must Be Last Element
 */

// function calc(...numbers) // Array Of Argements
// {
// console.log(Array.isArray(numbers));
// let result = 0;
// for (let i = 0; i < numbers.length; i++)
// {
// console.log(numbers[i]);
//         result += numbers[i];
//     }
//     return `Final Result Is: ${result}`;
// }

// console.log(calc(10, 20, 10, 30, 50));


/**
 * Function Ultimate Practice
    * Function Advanced Practice
        * Parameters
        * Defoult
        * Rest
        * Loop
        * Condition
 */
// function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk)
// {
//     document.write(`<div>`);
//     document.write(`<h2>Welcome, ${us}</h2>`);
//     document.write(`<p>Your Age Is: ${ag}</p>`);
//     document.write(`<p>Your Rate Is: $${rt}</p>`);
//     if (show === "Yes")
//     {
//         if (sk.length === 0)
//         {
//             document.write(`<p>Your Skills Is: 0</p>`);
//         } else
//         {
//             document.write(`<p>Your Skills Is: ${sk.join(" | ")}</p>`);
//         }
//     } else
//     {
//         document.write(`<p>Skills Is Hidden</p>`);
//     }
//     document.write(`</div>`);
// }

// showInfo("Mahmoud", 32, 20, "Yes", "HTML", "CSS", "JS", "GIT", "Angular", "Bootstrap");


/**
 * Random Arguments Function Challenge                      غير مكتمل
    Function - Random Argument Challenge
    ====================================
    Create Function showDetails
    Function Accept 3 Parameters [a, b, c]
    Data Types For Info Is
    - String => Name
    - Number => Age
    - Boolean => Status
    Argument Is Random
    Data Is Not Sorted Output Depend On Data Types
    - Use Ternary Conditional Operator
 */
// function showDetails(a, b, c)
// {
//     console.log(`Hello ${a}, Your Age Is ${b}, You Are Available For Hire`)
//     // console.log(`Hello ${a}, Your Age Is ${b}, You Are Not Available For Hire`)
// }




// // Needed Output
// showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"


/**
 * Anonymous Function And Practice
    * Function
    * Anonymous Function
    * Calling Named Function vs Anonymous Function
    * Argument To Other Function
    * Task Without Name
    * SetTimeOut
 */

// (() =>
// {

// })
// let calc = (num1, num2) =>
// {
//     num1 = 10;
//     num2 = 300;
//     console.log(num1 + num2);
//     document.querySelector("div").innerHTML = num1 + num2;
//     return num1 + num2;
// }
// document.querySelector(".show").addEventListener("click", calc);

// document.querySelector(".show").addEventListener("click", calc, setTimeout(() =>
// {
//     console.log("Mahmoud");
// }, 2000));


/**
 * Return Nested Function
    * Function
        * Function Inside Function
        * Return Function
 */

// Example 1
// function sayMessage(fName, lName)
// {
//     let message = "Hello";
//     // Nested Function
//     function concatMsg()
//     {
//         message = `${message} ${fName} ${lName}`;
//     }
//     concatMsg();
//     return message;
// }

// console.log(sayMessage("Mahmoud", "Easa"));

// Example 2
// function sayMessage(fName, lName)
// {
//     let message = "Hello";
//     // Nested Function
//     function concatMsg()
//     {
//         return `${message} ${fName} ${lName}`;
//     }
//     return concatMsg();
// }

// console.log(sayMessage("Mahmoud", "Easa"));

// Example 3
// function sayMessage(fName, lName)
// {
//     let message = "Hello";
//     // Nested Function
//     function concatMsg()
//     {
//         function getFullName()
//         {
//             return `${fName} ${lName}`;
//         }
//         return `${message} ${getFullName()}`;
//     }
//     return concatMsg();
// }

// console.log(sayMessage("Mahmoud", "Easa"));


/**
 * Arrow Function Syntax
    * Function
        * Arrow function
        * Regular vs Arrow [Param + No Param]
        * Multiple Lines
 */

// function print()
// {
//     return 10;
// };

// let print = (num1, num2) => num1 + num2; // If I Have More Parameters

// let print = num => num; // If I Have One Parameter

// let print1 = () => // If I Have More Line
// {
//     let a = 20;
//     return a;
// };

// let print = () => 10; // If I Have One Line
// let print2 = _ => 10; // If I Have One Line And I Do Not Have Parameters

// console.log(print(50, 200));
// console.log(print1());
// console.log(print2());


/**
 * Global And Local
    * Scope
        * Global And Local Scope
 */

// var a = 1;
// let b = 2;
// function showText()
// {
//     var a = 10;
//     let b = 20;
//     console.log(`Function - From Local ${a}`);
//     console.log(`Function - From Local ${b}`);
// }
// console.log(`From Global ${a}`);
// console.log(`From Global ${b}`);
// showText();


/**
 * Scope - Block
    * Scope
        * Block Scope [If, Switch, For]
 */
// var x = 10;
// if (10 === 10)
// {
//     // var x = 50;
//     let x = 50;
//     console.log(`From If Block ${x}`);
// }
// console.log(`From Global ${x}`);


/**
 * Lexical (Static)
    * Scope
        * Lexical Scope
  
    * Search
        * Execution Context
        * Lexical Environment
 */
// let a = 20;
// function parent()
// {
//     let a = 10;
//     function child()
//     {
//         function gChild()
//         {
//             let a = 30;
//             console.log(a);
//         }
//         console.log(a);
//         gChild();
//     }
//     child();
// }
// parent();


/**
 * Arrow Function Challenge
    * Function Arrow Challenges
 */
// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function (...names)
// {
//     // Parameter ?
//     return `string [${names.join("], [")}] => Done !`;
// };
// let names = (...names) => `string [${names.join("], [")}] => Done !`;

// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

// let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + Number(nums);
// let calc = function (one, two, ...nums)
// {
//     return one + two + Number(nums);
// }
// console.log(calc(10, myNumbers[1], myNumbers[0])); // 80


/**
 * Higher Order Functions - Map
    * Higher Order Functions
    * Map // Return A New Array
    
    * Syntax map(CallBackFunction(Element, Index, Array) { }, thisArg)
        * Element =>
        * Index =>
        * Array =>
    
    * Notes
        * Map Return A New Array
    
    * Examples
        * Anonymous Function
        * Named Function
 */
// let myNums = [1, 2, 3, 4, 5, 6];
// let newArray = [];
// for (let i = 0; i < myNums.length; i++)
// {
//     newArray.push(myNums[i] + myNums[i]);
// }
// console.log(newArray);
// Same Idea With map
// let addSelf = myNums.map(function (element, index, arr)
// {
//     // console.log(`Current Element ${element}`);
//     // console.log(index);
//     // console.log(arr);
//     // console.log(this);
//     return element + element;
// }, 10)
// let addSelf = myNums.map(e => e + e);
// console.log(addSelf);
// function addition(ele)
// {
//     return ele + ele;
// }
// let add = myNums.map(addition);
// console.log(add);


/**
 * Higher Order Functions - Map Practice
 * Map
    * Swap Cases
    * Inverted Numbers
    * Ignore Boolean Value
 */
// let swappingCases = "elZERo";
// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let ignoreNumbers = "Elz123er4o";

// swappingCases.split("")// علشان يتحول لأراي
// let sw = swappingCases.split("").map(function (ele)
// {
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
// }).join("");
// let sw = swappingCases.split("").map((ele) =>
//     ele === ele.toUpperCase()
//         ? ele.toLowerCase()
//         : ele.toUpperCase()).join("");
// console.log(sw);

// let inv = invertedNumbers.map(function (ele)
// {
//     return -ele;
// })
// let inv = invertedNumbers.map((ele) => -ele);
// console.log(invertedNumbers);
// console.log(inv);

// let ign = ignoreNumbers.split("").map(function (ele)
// {
//     return isNaN(parseInt(ele)) ? ele : "";
// }).join("");
// let ign = ignoreNumbers.split("").map((ele) =>
//     isNaN(parseInt(ele)) ? ele : "").join("");
// console.log(ign);


/**
 * Higher Order Functions - Filter
    * Filter
        * method Creates A New Array
        * 
    * Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg);
        * element =>
        * Index =>
        * Array =>
 */

// Get Friends With Name Starts With A
// let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];
// Tetst Map vs Filter
// let addMap = numbers.map(function (el)
// {
//     return el + el;
// });
// console.log(numbers);
// console.log(addMap);

// let addFilter = numbers.filter(function (el)
// {
//     return el + el;
// });
// console.log(addFilter);

// let filterdFriends = friends.filter(function (el)
// {
//     return el.startsWith("A");
//     // return el.startsWith("A") ? true : false;
// });

// console.log(filterdFriends);

// // Get Even Numbers Only
// let numbers = [11, 20, 2, 5, 17, 10];

// let filterdNumbers = numbers.filter(function (el)
// {
//     return el % 2 === 0;
//     // return el % 2 === 0 ? true : false;
// });
// console.log(filterdNumbers);


/**
 * Higher Order Functions - Filter Practice
    * Filter
        *Filter Longest Word By Number
 */
// // Filter Words More Than 4 Characters
// let sentence = "I Love Foood Code Too Playing Much";

// // let smallWords = sentence.split(" ").filter(function (el)
// // {
// //     return el.length <= 4;
// // }).join(" ");
// // console.log(smallWords);
// let smallWords = sentence.split(" ").filter((el) => el.length <= 4).join(" ");
// console.log(smallWords);

// // Ignore Numbers
// let ignoreNumbers = "Elz123er4o";

// let ign = ignoreNumbers.split("").filter((ele) => isNaN(parseInt(ele))).join("");
// console.log(ign);

// // Filter Strings + Multiply
// let mix = "A13BS2ZX"; // 17424
// let mixNum = mix.split("").filter((ele) => parseInt(ele)).map((el) => el * el).join("");
// console.log(mixNum);


/**
 * Higher Order Functions - Reduce
 * Reduce
 * Syntax
 * reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue);
 */

// let nums = [10, 20, 15, 30];
// let add = nums.reduce(function (acc, current, index, arr)
// {
//     console.log(`Acc => ${acc}`)
//     console.log(`Current Element => ${current}`)
//     console.log(`Current Element Index => ${index}`)
//     console.log(`Array => ${arr}`)
//     console.log(acc + current)
//     console.log(`#####################`)
//     return acc + current;
//     // return current;
//     // return index;
//     // return arr;
// }, 5); // initialValue

// console.log(add);


/**
 * Higher Order Functions - Reduce Practice
 * Reduce
 * Longest Word
 * Remove Characters + Use Reduce
 */

// let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"];
// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

// // let bigWord = theBiggest.filter(el => el.length > 4);
// let check = theBiggest.reduce(function (acc, current)
// {
//     // console.log(`Acc => ${acc}`)
//     // console.log(`Current Element => ${current}`)
//     // console.log(acc + current)
//     // console.log(`#####################`)
//     return acc.length > current.length ? acc : current;
// }); // initialValue
// console.log(check);
// let finalString = removeChars.filter(el => !el.includes("@")).reduce((acc, current)=> acc + current);
// console.log(finalString.charAt(0) + finalString.slice(1).toLowerCase());


/**
 * Higher Order Functions - ForEach And Practice
    * forEach
    * Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg);
        * Element =>
        * Index =>
        * Array =>
    * Note
        * Doesnt Return Anything [Undefined]
        * Break Will Not Break The Loop
 */

// let allLis = document.querySelectorAll("ul li");
// let div = document.querySelector(".content");

// allLis.forEach(function (eleAdd)
// {
//     // console.log(ele);
//     // ele.onclick = function ()
//     // {
//     //     console.log(this.innerHTML);
//     // }
//     eleAdd.addEventListener("click", () =>
//     {
//         allLis.forEach(eleRemove => eleRemove.classList.remove("active"));
//         eleAdd.classList.add("active");
//     })
// })
// for (let i of allLis)
// {
//     i.addEventListener("click", () =>
//     {
//         // Remove Active Class From All Elements
//         for (let x of allLis)
//         {
//             x.classList.remove("active");
//         }
//         // Add Active Class In All Elements
//         i.classList.add("active");
        
//         if (div.style.display === "none")
//         {
//             div.style.display = "block";
//         } else
//         {
//             div.style.display = "none";
            
//         }
//     })
// }
// console.log(allLis);


/**
 * Higher Order Functions - Challenge
 *   Higher Order Functions Challenges

        You Can Use
        - ,
        - _
        - Space
        - True => 1 => One Time Only In The Code

        You Cannot Use
        - Numbers
        - Letters

        - You Must Use [Filter + Map + Reduce + Your Knowledge]
        - Order Is Not Important
        - All In One Chain
*/

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString.split("").filter(e =>
// {
//     return !e.includes(",") && isNaN(parseInt(e));
// }).map(e =>
// {
//     return e === "_" ? " " : e;
// }).join("").slice(1, -1);
// console.log(solution); // Elzero Web School


/**
 * Object - Introduction
    * Object
 */
// let user = {
//     theName: "Mahmoud",
//     theAge: 32,
//     sayHello: _ =>
//     {
//         return `Hello`;
//     },
// };
// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.sayHello());


/**
 * Object - Introduction
    * Object
        * Dig Deeper
        * Dot Notation vs Bracket Notation
        * Dynamic Property Name
 */
// let myVar = "country";
// let user = {
//     theName: "Mahmoud",
//     country: "Egypt",
//     "the age": 31,
// };

// console.log(user.theName);
// console.log(user[myVar]);
// console.log(user["the age"]);


/**
 * Nested Object And Advanced Trainings
    * Object
        * Nested Object And Trainings
 */

// let ob1 = {
//     myName: "Mahmoud",
//     myAge: 31,
//     mySkills: ["HTML", "CSS", "JS"],
//     myFriend1: {
//         hisName: "Ahmed",
//         hisAge: 26,
//     },
//     myFriend2: {
//         hisName: "Hesham",
//         hisAge: 26,
//     },
//     available: true,
//     addresses: {
//         ksa: "Riyadh",
//         egypt: {
//             one: "Cairo",
//             two: "Giza",
//         },
//     },
//     checkAv: () =>
//     {
//         if (ob1.available === false)
//         {
//             return ob1.addresses.ksa;
//         } else
//         {
//             return ob1.addresses.egypt.one;
//         }
//     },
// };
// console.log(`I Am In: ${ob1.checkAv()}`);
// console.log(`My Name Is: ${ob1.myName}`);
// console.log(`My Age Is: ${ob1.myAge}`);
// console.log(`My Skills Is: ${ob1.mySkills[0]}, ${ob1.mySkills[1]}, ${ob1.mySkills[2]}`);
// console.log(`My Friend Name Is: ${ob1.myFriend1.hisName}`);
// console.log(`My Friend Age Is: ${ob1.myFriend1.hisAge}`);
// console.log(`My Other Friend Name Is: ${ob1.myFriend2.hisName}`);
// console.log(`My Friend Age Is: ${ob1.myFriend2.hisAge}`);


/**
 * Create Object With New Keyword
    * Object
        * Create With New Keyword Object();
 */
// let user = { age: 11};
// let user = new Object({
//     age: 20,
// });
// console.log(user.age);
// user.age = 31;
//     user.name = "Mahmoud";
//     user["country"] = "Egypt";
// user.ddd = {
//     name: "mmmm",
//     age: 333,
// };
// user.ffff = [33, 44, 55,];
// user.sayHello = _ => `Hello`;
// console.log(user.age);
// console.log(user["country"]);
// console.log(user.name);
// console.log(user.ddd.name);
// console.log(user.ddd.age);
// console.log(user.ffff.join(" "));
// console.log(user.sayHello());


/**
 * This Keyword
    * Search
        * Strict Mode //                             لازم أبحث عنها
 */
// console.log(this);
// console.log(this === window);

// myVar = 100;
// console.log(window.myVar);
// console.log(this.myVar);

// function sayHello()
// {
//     console.log(this);
//     return this;
// }
// sayHello();
// console.log(sayHello() === window);
// document.querySelector("#cl").addEventListener("click", function ()
// {
//     console.log(this);
// });
// // document.getElementById("cl").onclick = function ()
// // {
// //     console.log(this);
// // };

// let user = {
//     age: 32,
//     ageInDays: function ()
//     {
//         console.log(this);
//         return this.age * 365;
//     },
// };
// console.log(user.age);
// console.log(user.ageInDays());


/**
 * Create Object With Create Method
    * Object
 */
// let user = {
//     age: 32,
//     doubleAge: function ()
//     {
//         return this.age * 2;
//     },
// };
// console.log(user);
// console.log(user.age);
// console.log(user.doubleAge());

// let obj = Object.create({});
// obj.a = 100;
// console.log(obj);

// let copyObj = Object.create(user);
// copyObj.age = 20;
// console.log(copyObj);
// console.log(copyObj.age);
// console.log(copyObj.doubleAge());


/**
 * Create Object With Assign Method
    * Object
*/

// let obj1 = {
//     prop1: 1,
//     meth1: function ()
//     {
//         return this.prop1;
//     },
// };
// let obj2 = {
//     prop4: 4,
//     meth2: function ()
//     {
//         return this.prop4;
//     },
// };
// let targetObject = {
//     prop2: 2,
//     prop3: 3,
// };

// // let newObj = new Object();
// // let newObj2 = Object.create();
// let finalObject = Object.assign(targetObject, obj1, obj2);
// finalObject.prop1 = 800;
// finalObject.prop55 = 999;
// console.log(finalObject);

// let newObject = Object.assign({}, obj1, { prop2: 2, prop3: 3, prop4: 4,});
// console.log(newObject);


/**
 * What Is DOM And Select Elements
    * DOM
        * What Is DOM
        * DOM Selectors
            * Find Element By ID
            * Find Element By Tag Name
            * Find Element By Class Name
            * Find Element By Css Selectors
            * Find Element By Collection
                * title
                * body
                * images
                * forms
                * links
 */
// let myIdElement = document.getElementById("my-div");
// let myTagElement = document.getElementsByTagName("p");
// let myClassElement = document.getElementsByClassName("my-span");
// let sp = document.querySelector(".my-span");
// let par = document.querySelectorAll("p");
// let myDiv = document.querySelector("#my-div");
// let formOne = document.querySelectorAll("form")
// let link = document.querySelectorAll("a");
// formOne[1].two.value = "Mahmod";
// link[0].href = "http://www.fb.com";
// par[0].innerHTML = "Hello Mahmoud";
// par[1].innerHTML = "Hello Mahmoud2";
// let title = document.title.innerHTML = "Mahmoud Easa";
// console.log(title);
// console.log(document.body);
// console.log(formOne[1]);
// console.log(document.forms[0].one.value = "Mahmoud");
// console.log(link[0].href);


/**
 * Get / Set Elements Content And Attributes
 * DOM [Get / Set Elements Content And Attributes]
    * innerHTML
    * textContent
    * Change Attributes Directly
    * Change Attributes With Methods
        * getAttribute
        * setAttribute
    * Search
        * innerText
 */
// let myElement = document.querySelector(".js");
// console.log(myElement.innerHTML);
// console.log(myElement.textContent);
// myElement.innerHTML = "Text From <span>Main.js</span> File";
// myElement.textContent = "Text From <span>Main.js</span> File";// لو عايز التاج مع التيكست
// // document.images[0].src = "https://www.google.com";
// // document.images[0].alt = "Alternate";
// // document.images[0].title = "Picture";
// let img = document.querySelector("img");
// img.src = "https://www.google.com";
// img.alt = "Alternate";
// img.title = "Picture";
// img.id = "pic";
// img.className = "pic2 pic3";
// let myLink = document.querySelector(".link");
// // console.log(myLink.getAttribute("class"));
// // console.log(myLink.getAttribute("href"));
// myLink.getAttribute("class");
// myLink.getAttribute("href");
// myLink.setAttribute("href", "https://www.google.com");
// myLink.setAttribute("target", "_blank");


/**
 * Check Attributes And Examples
    * DOM [Check Attributes]
        * Element.attributes
        * Element.hasAttribute
        * Element.hasAttributes
        * Element.removeAttribute
 */
// console.log(document.querySelectorAll("p")[0].attributes);
// let myP = document.querySelectorAll("p")[0];
// let myDiv = document.querySelector("div");
// if (myP.hasAttribute("data-src"))
// {
//     if (myP.getAttribute("data-src") === "")
//     {
//         myP.removeAttribute("data-src");
//     } else
//     {
//         myP.setAttribute("data-src", "New Value");
//     }
// } else
// {
//     console.log(`Not Found`);
// }
// if (myP.hasAttributes())
// {
//     console.log(`Has Attributes`);
// } else
// {
//     console.log(`Not Has Attributes`);
// }
// if (myDiv.hasAttributes())
// {
//     console.log(`Has Attributes`);
// } else
// {
//     console.log(`Not Has Attributes`);
// }

/**
 * Create And Append Elements
    * DOM [Check Elements]
        * createElement
        * createComment
        * createTextNode
        * createAttribute
        * appendChild
 */

// let myElement = document.createElement("div");
// let myAttr = document.createAttribute("data-custom");
// let myText = document.createTextNode("Product One");
// let myComment = document.createComment("This Is Div");

// myElement.className = "product";
// myElement.setAttributeNode(myAttr); // بيدي اتربيوت فاضي ونغيره بعدين
// myElement.setAttribute("data-test", "Testing");

// // Append Comment To Element
// myElement.appendChild(myComment);

// // Append Text To Element
// myElement.appendChild(myText);

// // Append Element To Body
// document.body.appendChild(myElement);


/**
 * Product With Title And Description Practioce
    * DOM [Check Elements]
        * Practice Product With Heading And Paragraph
 */
// Start Global Variables
    // Create Elements
    
//     for (let i = 0; i <= 100; i++)
//     {
//     let product = document.createElement("div");
//     let h2 = document.createElement("h2");
//     let para = document.createElement("p");
//     // End Global Variables
    
//     // Add Text To Elements
//     h2.innerHTML = "Hello, Mahmoud";
//     para.innerHTML = "Welcome";
//     // Add Class Name To My Div
//     product.setAttribute("class", "product");
//     // Append Elements To My Div
//     product.appendChild(h2);
//     product.appendChild(para);
//     // Appen My Div To Body
//     document.body.appendChild(product);
// };


/**
 * Deal With Children's
    * DOM [Deal With Childrens]
        * children
        * childNodes
        * firstChild
        * lastChild
        * firstElementChild
        * lastElementChild
 */
// let myElement = document.querySelector("div");
// console.log(myElement);
// console.log(myElement.children); // بيرجع العناصر داخل الأب فقط
// console.log(myElement.children[0]); // بيرجع العناصر داخل الأب فقط
// console.log(myElement.children[1]); // بيرجع العناصر داخل الأب فقط
// console.log(myElement.childNodes); // بيرجع عناصر وتيكست وكومنت والكل داخل الأب
// console.log(myElement.firstChild);
// console.log(myElement.lastChild);
// console.log(myElement.firstElementChild);
// console.log(myElement.lastElementChild);


/**
 * DOM [Events]
    * Use Events On HTML
    * Use Events On JS
        * onclick // click Left
        * oncontextmenu // click Right
        * onmouseenter // Hover On Button لما اروح عليه بالماوس
        * onmouseleave // لما اروح عليه بالماوس وأمشي من عليه
        * 
        * onload
        * onscroll
        * onresize // لما بكبر الصفحه من الجنب وأصغرها
        * 
        * onfocus // لما أضغط على الحقل علشان اكتب فيه
        * onblur // لما أضغط بره الحقل اللي كنت بكتب فيه
        * onsubmit // لما الشخص يضغط عليها يشيك على الحقول إنها تمام قبل ما تروح للسيرفر
//  */
// let btn = document.querySelector("#btn");
// btn.addEventListener("mouseleave", function ()
// {
//     console.log(`My Name Is: Mahmoud`);
// })

// window.onresize = function ()
// {
//     console.log(`Scroll`);
// };


/**
 * Validate Form And Prevent Default
    * DOM [Events]
        * Validate Form Practice
        * Prevent Default
 */
// let userInput = document.querySelector("[name='username']");
// let ageInput = document.querySelector("[name='age']");

// document.forms[0].onsubmit = function (e)
// {
//     let userValid = false;
//     let ageValid = false;

//     if (userInput.value !== "" && userInput.value.length <= 10)
//     {
//         userValid = true;
//     } else
//     {
//         userValid = false;
//     }
//     if (ageInput.value !== "")
//     {
//         ageValid = true;
//     }

//     if (userValid === false || ageValid === false)
//     {
//         e.preventDefault();
//     }
// };

// document.links[0].onclick = function (event)
// {
//     console.log(event);
//     event.preventDefault();
// }


/**
 * Event Simulation - Click focus Blur
    * DOM [Events Simulation]
        * click
        * focus
        * blur
 */

// let one = document.querySelector(".one");
// let two = document.querySelector(".two");
// window.onload = function ()
// {
//     two.focus();
// };
// one.onblur = function ()
// {
//     document.links[0].click();
// }


/**
 * Class List Object And Methods
    * DOM [Class List]
        * ClassList
        * length
        * contains // بيبحث عن كلاس موجود ولا لا
        * item(index) // بيرجع الكلاس برقم الأنديكس بتاعه
        * add
        * remove
        * toggle // بياخد كلاس واحد فقط لو الكلاس ده موجود بيشيله ولو مش موجود بيضيفه
 */
// let element = document.querySelector("#my-div");
// let element2 = document.querySelector("#my-div2");
// element.addEventListener("click", toggleclas);
// element2.addEventListener("click", addclas);
// function addclas()
// {
//     this.classList.add("mm", "nn");
// }
// function toggleclas()
// {
//     this.classList.toggle("three");
// }
// // element.onclick = function ()
// // {
// //     this.classList.add("add-one", "add-two");
// // }
// console.log(element.classList);
// console.log(typeof element.classList);
// console.log(element.classList.contains("Mahmod")); // false
// console.log(element.classList.contains("show")); // true
// console.log(element.classList.item(2)); // بيرجع الكلاس رقم الإنديكس
// // console.log(element.classList.add("Mahmoud", "Ma"));
// console.log(element.classList);
// console.log(element.classList.remove("Mahmoud", "Ma"));
// console.log(element.classList);


/**
 * CSS Styling And Stylesheets
    * DOM [CSS]
        * style
        * cssText
        * removeProperty(propertyName) [Inline, Stylesheet]
        * setProperty(PropertyName, value, priority=>"important")
 */
// let element = document.getElementById("my-div");
// element.style.color = "green";
// element.style.fontWeight = "900";
// element.style.backgroundColor = "#eee";
// element.style.cssText =
//     "color: red !important; background-color: #e2e1e2; font-weight: 900;";
// element.style.removeProperty("color");
// element.style.setProperty("background-color", "aqua", "important");
// console.log(document.styleSheets[0].cssRules[0].style.removeProperty("color"));
// console.log(document.styleSheets[0].cssRules[0].style.removeProperty("background-color"));
// console.log(document.styleSheets[0].cssRules[0].style.setProperty("background-color", "red", "important"));


/**
 * Befor, After, Prepend, Append, Remove
    * DOM [Deal With Elements]
        * befor [Element || String]
        * after [Element || String]
        * append [Element || String]
        * prepend [Element || String]
        * remove // بيشيل العنصر من الدوم تماما علشان لما اعمله اخفاء بالسي أس أس ممكن حد يظهره من الكونسول
 */
// let element = document.getElementById("my-div");
// let element = document.querySelector("#my-div");
// let createdPAfter = document.createElement("p");
// let createdPBefore = document.createElement("p");
// let createdPPrepend = document.createElement("p");
// let createdPAppend = document.createElement("p");
// createdPAfter.innerHTML = "Hello, Mahmoud After";
// createdPBefore.innerHTML = "Hello, Mahmoud Before";
// createdPPrepend.innerHTML = "Hello, Mahmoud Prepend";
// createdPAppend.innerHTML = "Hello, Mahmoud Append";

// // element.before("Hello From JS (Before)");
// element.before(createdPBefore);
// element.after(createdPAfter);
// element.prepend(createdPPrepend);
// element.append(createdPAppend);
// element.remove();
// // element.style.display = "none"


/**
 * DOM [Tranversing]
    * nextSibling // الشقيق التالي إن كان كومنت أو عنصر أو تيكست أو أي نوع
    * previousSibling // الشقيق اللي قبله إن كان كومنت أو عنصر أو تيكست أو أي نوع
    * nextElementSibling // الشقيق التالي ويكون عنصر ويتجاهل الكومنت أو التيكست أو أي حاجه تانيه
    * previousElementSibling // الشقيق اللي قبله ويكون عنصر ويتجاهل الكومنت أو التيكست أو أي حاجه تانيه
    * parentElement // الأب اللي في كل العناصر
     (مثلا لو في زرار بيشيل العنصر كامل اللي هو فيه)
 */
// let span = document.querySelector(".two");
// // let span = document.getElementById("two");

// console.log(span.previousSibling);
// console.log(span.nextElementSibling);
// console.log(span.previousElementSibling);
// // console.log(span.nextElementSibling.remove());
// console.log(span.nextSibling);
// console.log(span.parentElement);
// // span.onclick = function ()
// // {
// //     this.parentElement.style.opacity = "0";
// // }
// span.previousElementSibling.addEventListener("click", removeParent);
// function removeParent()
// {
//     this.parentElement.remove();
//     // this.parentElement.style.opacity = "0";
// }


/**
 * DOM [Cloning]
 * CloneNode(Deep=> true || false)
 * true // يأخذ العنصر بالعناصر والتيكست اللي جواه
 * false => Default // ياخذ العنصر فاضي بالأتربيوتس فقط
 */
// let myP = document.querySelector("p").cloneNode();
// let myDiv = document.querySelector("div");
// let myText = document.createTextNode("My Paragraph");
// myP.id = `${myP.id}-clone`;
// myP.appendChild(myText);
// myDiv.prepend(myP);


/**
 * AddEventListener
    * DOM [Add Event Listener]
        * addEventListener
        * Use Without On
        * Attach Multiple Events
        * Error Test
    * Search
        * Capture & Bubbling JavaScript
        * removeEventListener
 */

// let myP = document.querySelector("p");
// let myDiv = document.querySelector("div");
// // let myDivClone = document.querySelector("div").cloneNode(true);
// // let clon = document.querySelector("div").cloneNode(true);

// myP.addEventListener("click", one);
// myP.addEventListener("click", two);
// // myP.addEventListener("click", "String"); // Error
// myDiv.addEventListener("click", cloneDiv);
// // myP.onclick = function ()
// // {
// //     console.log("Message From OnClick");
// // };
// // myDiv.classList = "clone";
// function cloneDiv()
// {
//     let clone = myDiv.cloneNode(true);
//     document.body.prepend(clone);
//     myDiv.classList.toggle("clone");
//     // let clone = myDivClone.cloneNode(true);
//     // clone.addEventListener("click", function ()
//     // {
//     //     console.log("I'am Cloning");
//     // });
//     // myDiv.appendChild(clone);
//     // clone.classList = "clone";
//     // clone.classList.toggle("clone");
//     // myDivClone.classList.toggle("clone");
//     // document.querySelector("div").cloneNode(true);
// }
// function one()
// {
//     console.log("Message From OnClick 1");
// };
// function two()
// {
//     console.log("Message From OnClick 2");
// };
// // let cloned = document.querySelector(".clone");
// // cloned.addEventListener("click", function ()
// // {
// //     console.log("I'am Cloning 2");
// // });
// document.addEventListener("click", function (e)
// {
//     if (e.target.className === "clone")
//     {
//         console.log("I'am Cloning 2");
//     }
// });
















/**
 * DOM Challenge
 */

// // Start Global Variables
// // Start Create Elements For Header
// let div = document.createElement("header");
// div.classList.add("header");
// let logo = document.createElement("a");
// logo.classList.add("logo");
// logo.href = "#";
// let ul = document.createElement("ul");
// let liText = ["Home", "About", "Service", "Contact"];
// // End Create Elements For Header

// // Start Create Elements For Main Section
// let mainDivContainer = document.createElement("section");
// mainDivContainer.classList.add("main");
// let mainDivC = document.createElement("div");
// // End Create Elements For Main Section

// // Start Create Elements For Footer
// let footerDiv = document.createElement("footer");
// footerDiv.classList.add("footer");
// let footerP = document.createElement("p");
// // End Create Elements For Footer
// // End Global Variables

// // Start Header
// // Start Append Elements For Header
// document.body.appendChild(div);
// div.appendChild(logo);
// div.appendChild(ul);
// logo.innerHTML = "Elzero";
// // End Append Elements For Header

// for (let i of liText)
// {
//     let links = document.createElement("a");
//     let li = document.createElement("li");
//     li.appendChild(links);
//     ul.appendChild(li);
//     links.innerHTML = links.innerHTML + i;
//     li.style.marginLeft = "10px";
//     li.style.marginRight = "10px";
//     li.style.listStyle = "none";
//     li.style.cursor = "pointer";
// }
// // Start Style For Header
// // Div
// div.style.boxSizing = "border-box";
// div.style.display = "flex";
// div.style.paddingLeft = "20px";
// div.style.paddingRight = "20px";
// div.style.justifyContent = "space-between";
// div.style.alignItems = "center";
// div.style.width = "auto";
// // Ul
// ul.style.display = "flex";
// ul.style.boxSizing = "border-box";
// ul.style.flexWrap = "wrap";
// // Logo
// logo.style.boxSizing = "border-box";
// logo.style.cursor = "pointer";
// logo.style.color = "#23a96e";
// logo.style.fontWeight = "900";
// logo.style.fontSize = "20px";
// logo.style.textDecoration = "none";
// // End Style For Header
// // End Header

// // Start Main Section
// // Append Div Container In Body
// document.body.appendChild(mainDivContainer);
// mainDivContainer.appendChild(mainDivC);
// // For Loop For Numbers
// for (let i = 1; i <= 15; i++)
// {
//     // Cereate Elements
//     let mainDiv = document.createElement("div");
//     let mainPNumber = document.createElement("p");
//     let mainP = document.createElement("p");
//     // Add Text
//     mainPNumber.innerHTML = mainPNumber.innerHTML + i;
//     mainP.innerHTML = "Product";
//     // Append Elements In Div
//     mainDivC.appendChild(mainDiv);
//     mainDiv.appendChild(mainPNumber);
//     mainDiv.appendChild(mainP);
//     // Start Style For Main Section
//     // Main Div
//     mainDiv.style.boxSizing = "border-box";
//     mainDiv.style.display = "flex";
//     mainDiv.style.flexWrap = "wrap";
//     mainDiv.style.flexDirection = "column";
//     mainDiv.style.justifyContent = "center";
//     mainDiv.style.alignItems = "center";
//     mainDiv.style.margin = "7px";
//     mainDiv.style.padding = "15px";
//     mainDiv.style.width = "31%";
//     mainDiv.style.backgroundColor = "#fff";
//     // Main P
//     mainP.style.boxSizing = "border-box";
//     mainP.style.padding = "0";
//     mainP.style.margin = "0";
//     mainP.style.fontSize = "10px";
//     mainP.style.color = "#c5d0da";
//     // Main Number
//     mainPNumber.style.boxSizing = "border-box";
//     mainPNumber.style.padding = "0";
//     mainPNumber.style.margin = "0";
//     mainPNumber.style.fontWeight = "900";
//     mainPNumber.style.fontSize = "20px";
// }
// // Main Div Container
// // Main div Container
// mainDivContainer.style.boxSizing = "border-box";
// mainDivContainer.style.backgroundColor = "#ececec";
// mainDivContainer.style.paddingTop = "5px";
// mainDivContainer.style.paddingBottom = "5px";
// mainDivContainer.style.marginLeft = "20px";
// mainDivContainer.style.marginRight = "20px";
// mainDivContainer.style.marginBottom = "0";
// // Main Div C
// mainDivC.style.boxSizing = "border-box";
// mainDivC.style.display = "flex";
// mainDivC.style.justifyContent = "center";
// mainDivC.style.alignItems = "center";
// mainDivC.style.flexWrap = "wrap";
// mainDivC.style.width = "100%";
// mainDivC.style.padding = "0";
// mainDivC.style.margin = "0";
// // End Style For Main Section
// // End Main

// // Start Footer
// document.body.appendChild(footerDiv);
// footerDiv.appendChild(footerP);
// footerP.innerHTML = "Copyright 2021";
// // Start Style For Footer
// // Footer Div
// footerDiv.style.boxSizing = "border-box";
// footerDiv.style.backgroundColor = "#23a96e";
// footerDiv.style.marginLeft = "20px";
// footerDiv.style.marginRight = "20px";
// footerDiv.style.padding = "10px";
// footerDiv.style.textAlign = "center";
// // Footer P
// footerP.style.boxSizing = "border-box";
// footerP.style.margin = "0";
// footerP.style.padding = "0";
// footerP.style.width = "auto";
// footerP.style.height = "auto";
// footerP.style.color = "#eaf8f4";
// // End Style For Footer
// // End Footer











/**
  BOM [Browser Object Model]
  - Introduction
  --- Window Object Is The Browser Window
  --- Window Contain The Document Object
  --- All Global Variables And Objects And Functions Are Members Of Window Object
  ------ Test Document And Console
  - What Can We Do With Window Object ?
  --- Open Window
  --- Close Window
  --- Move Window
  --- Resize Window
  --- Print Document
  --- Run Code After Period Of Time Once Or More
  --- Fully Control The URL
  --- Save Data Inside Browser To Use Later
*/
// window.document.title = "Hello JS";


/**
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data
 */
// alert("Test");
// console.log("Test");
// let confirmMsg = confirm("Are You Sure?");
// console.log(confirmMsg);
// if (confirmMsg === true) {
//   console.log("Item Deleted");
// } else {
//   console.log("Item Not Deleted");
// }
// let promptMsg = prompt("Good Day To You?", "Write Day With 3 Characters");
// console.log(promptMsg);



/**
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params) // بيشغل الكود بعد عدد الثواني المكتوبة
  - clearTimeout(Identifier)
*/
// setTimeout(function () {
//   console.log("Msg");
// }, 3000);
// setTimeout(sayMsg, 3000);
// function sayMsg() {
//   console.log(`Iam Message`);
// }
// setTimeout(sayMsg, 3000, "Osama", 38);
// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} Age Is : ${age}`);
// }
// let btn = document.querySelector("button");
// let counter = setTimeout(sayMsg, 3000, "Osama", 38);
// function sayMsg(user, age) {
//     console.log(`Iam Message For ${user} Age Is : ${age}`);
// }
// btn.onclick = function () {
//   clearTimeout(counter);
// };



/*
  BOM [Browser Object Model]
  - setInterval(Function, Millseconds, Additional Params) // بيفضل يكرر الكود بعد عدد الثواني المكتوبة
  - clearInterval(Identifier)
*/
// setInterval(function () {
//   console.log(`Msg`);
// }, 1000);
// setInterval(sayMsg, 1000);
// function sayMsg() {
//   console.log(`Iam Message`);
// }
// setInterval(sayMsg, 1000, "Osama", 38);
// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} His Age Is: ${age}`);
// }
// let div = document.querySelector("div");
// let counter = setInterval(countdown, 1000);
// function countdown() {
//   div.innerHTML -= 1;
//   if (div.innerHTML === "0") {
//     clearInterval(counter);
//   }
// }


/** 106 - Window Location Object
 * BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash
  --- protocol
  --- reload()
  --- replace(URL) // بيغير عنوان الموقع وبيشيله من الهستوري
  --- assign(URL) // بيغير عنوان الموقع وبيحتفظ بالهستوري
 */
// console.log(location);
// console.log(location.href);
// location.href = "https://google.com";
// location.href = "/#sec02";
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.protocol);
// console.log(location.hash);
// location.reload();
// location.replace("https://elzero.org");
// location.assign("http://google.com");



/** 107 - Window Open And Close
 *   BOM [Browser Object Model]
  - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
  - close()
  - Window Features
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]
  Search
  - Window.Open Window Features
 */
// setTimeout(function () {
//   window.open("", "_self", "", false);
// }, 2000);

// setTimeout(function () {
//   window.open("https://google.com", "_blank", "width=400,height=400,left=200,top=10");
// }, 2000);



/** 108 - Window History Object
 *   BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length
  --- Methods
  ------ back()
  ------ forward()
  ------ go(Delta) => Position In History

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
 */
// console.log(history);



/* 109 - Scroll, ScrollTo, ScrollBy, Focus, Print, Stop
  BOM [Browser Object Model]
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options)
  - scroll(x, y || Options)
  - scrollBy(x, y || Options)
*/
// let myNewWindow = window.open("https://google.com", "", "width=500,height=500");
// window.scrollTo({
//   left: 500,
//   top: 200,
//   behavior: "smooth"
// });



/* 110 - Scroll To Top Using ScrollY Practice
BOM [Browser Object Model]
- Practice => Scroll To Top
- scrollX [Alias => PageXOffset]
- scrollY [Alias => PageYOffset]
*/

// console.log(window.scrollX === window.pageXOffset);

// let btn = document.querySelector("button");

// window.onscroll = function ()
// {
//     if (window.scrollY >= 600)
//     {
//         btn.style.display = "inline-block";
//         // console.log(`Scrolling  Value Is ${window.scrollY}`);
//     } else
//     {
//         btn.style.display = "none";
        
//     }
// };

// btn.addEventListener("click", goUp);
// function goUp()
// {
//     window.scrollTo({
//         left: 0,
//         top: 0,
//         behavior: "smooth"
//     });
// }





/* 111 - Local Storage
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/

// Set
// window.localStorage.setItem("color", "#F00");
// window.localStorage.fontWeight = "bold";
// window.localStorage["fontSize"] = "20px";

// // Get
// console.log(window.localStorage.getItem("color"));
// console.log(window.localStorage.color);
// console.log(window.localStorage["color"]);

// // Remove One
// // window.localStorage.removeItem("color");

// // Remove All
// // window.localStorage.clear();

// // Get Key
// console.log(window.localStorage.key(0));

// // Set Color In Page
// document.body.style.backgroundColor = window.localStorage.getItem("color");

// console.log(window.localStorage);
// console.log(typeof window.localStorage);



/* 112 - Local Storage Color App Practice
  BOM [Browser Object Model]
  Local Storage Practice
*/
                                            // محتاج إعادة مراجعة
//  الكود بتاعي

// Global Variabells
// let liGroup = document.querySelectorAll("ul li");
// let myDiv = document.querySelector(".experiment");

// // localStorage.clear();
// if (window.localStorage.getItem("color"))
// {
//     // If There Is Color In Local Storage
//     // [1] Add Color To Div
//     myDiv.style.backgroundColor = window.localStorage.getItem("color");
//     // [2] Remove Active Class From All Lis
//     for (let item of liGroup)
//     {
//         item.classList.remove("active");
//     }
//     // [3] Add Active Class To Current Color
//    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
// }
// for (let item of liGroup)
// {
//     item.addEventListener("click", function ()
//     {
//         // Remove Active Class From All Lis
//         for (let item of liGroup)
//         {
//             item.classList.remove("active");
//         }
//         // Remove Active Class To Current Element
//         item.classList.add("active");
//         // Add Current Color To Local Storage
//         window.localStorage.setItem("color", item.getAttribute("data-color"));
//         // Change Div Background Color
//         myDiv.style.backgroundColor = item.getAttribute("data-color");
//     });
// };

                                            // الكود بتاع الزيرو
// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");

// if (window.localStorage.getItem("color")) {
//   // If There Is Color In Local Storage
//   // [1] Add Color To Div
//   exp.style.backgroundColor = window.localStorage.getItem("color");
//   // [2] Remove Active Class From All Lis
//   lis.forEach((li) => {
//     li.classList.remove("active");
//   });
//   // [3] Add Active Class To Current Color
//   document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
// }

// lis.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     // console.log(e.currentTarget.dataset.color);
//     // Remove Active Class From all Lis
//     lis.forEach((li) => {
//       li.classList.remove("active");
//     });
//     // Add Active Class To Current Element
//     e.currentTarget.classList.add("active");
//     // Add Current Color To Local Storage
//     window.localStorage.setItem("color", e.currentTarget.dataset.color);
//     // Change Div Background Color
//     exp.style.backgroundColor = e.currentTarget.dataset.color;
//   });
// });



/** 113 - Session Storage And Use Cases
 BOM [Browser Object Model]
 Session Storage
 - setItem
 - getItem
 - removeItem
 - clear
 - key
 
 Info
 - New Tab = New Session
 - Duplicate Tab = Copy Session
 - New Tab With Same Url = New Session
 */
// <form action="">
//   <input type="text" class="name" />
//    form>

// window.localStorage.setItem("color", "red"); // بيحتفظ بالبيانات بعد ما اقفل الصفحه وافتحها
// window.sessionStorage.setItem("color", "blue"); // بيحتفظ بالبيانات طول ماانا فاتح الصفحه وبعمل رفرش عادي بس لما اقفل الصفحه وأفتحها تاني بتروح البيانات
// let inp = document.querySelector(".name");

// if (window.sessionStorage.getItem("input-name"))
// {
//   inp.value = window.sessionStorage.getItem("input-name");
// }

// inp.onblur = function ()
// {
//   // console.log(this.value);
//   window.sessionStorage.setItem("input-name", this.value);
// };

// document.querySelector(".name").onblur = function () {
//   // console.log(this.value);
//   window.localStorage.setItem("input-name", this.value);
// };









/** 114 - BOM Challenge
 *                                      برنامج إضافة عناصر
 */
// Start Global Variables
// let inpText = document.querySelector(".input");
// let inpSubmit = document.querySelector(".add");
// let myDiv = document.querySelector(".tasks");
// let btnRemove = document.querySelector("button");
// let itemsArray = localStorage.getItem('items')
// ? JSON.parse(localStorage.getItem('items'))
// : []
// // End Global Variables
// localStorage.setItem("items", JSON.stringify(itemsArray));
// const data = JSON.parse(localStorage.getItem("items"));

// const pMaker = (text) =>
// {
//   // Create Div
//   let div = document.createElement("div");
//   div.classList.add("container-ele");
//   myDiv.appendChild(div)
//   // Create input
//   // Create P
//   let para = document.createElement("p");
//   para.textContent = text
//   div.appendChild(para)

//   let removeElement = document.createElement("input");
//   // Add Attributes
//   removeElement.type = "submit";
//   removeElement.value = "Remove";
//   removeElement.classList.add("remove");
//   let removeItem = function ()
//   {
//     removeElement.parentElement.remove();
//     if (myDiv.childElementCount === 0)
//     {
//       myDiv.style.display = "none";
//     } else
//     {
//       myDiv.style.display = "flex";
//     }
//   }
//   removeElement.addEventListener("click", removeItem);
//   div.appendChild(removeElement)
// }

// // Function For Add Item To My Div
// inpSubmit.addEventListener("click", function ()
// {
//   if (inpText.value !== "")
//   {
    
//     itemsArray.push(inpText.value);
//     localStorage.setItem("items", JSON.stringify(itemsArray));
//     pMaker(inpText.value);
//     inpText.value = "";
//     myDiv.style.display = "flex";
//   }
// });
//   data.forEach(item => {
//     pMaker(item);
//   });
//   // Clear localStorage
// btnRemove.addEventListener("click", function ()
// {
//   localStorage.clear();
//   location.reload();
//   while (myDiv.firstChild) {
//     myDiv.removeChild(myDiv.firstChild)
//   }
//     myDiv.style.display = "none";
// })
//     if (myDiv.childElementCount === 0)
//     {
//       myDiv.style.display = "none";
//     } else
//     {
//       myDiv.style.display = "flex";
//     }

  
  










/* 115 - Destructuring Arrays Part 1
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

// let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

// [a = "A", b, c, d, e = "Osama"] = myFriends;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// // console.log(myFriends[4]);

// let [, y, , z] = myFriends;

// console.log(y);
// console.log(z);



/* 116 - Destructuring Arrays Part 2
  Destructuring
  - Destructuring Array Advanced Examples
*/

// let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];

// // console.log(myFriends[3][2][1]);

// // let [, , , [a, , [, b]]] = myFriends;

// let [, , , [a, , [, b]]] = myFriends;

// console.log(a); // Shady
// console.log(b); // Gamal



/* 117 - Destructuring Arrays Part 3 Swap Variables
  Destructuring
  - Destructuring Array => Swapping Variables
*/

// let book = "Video";
// let video = "Book";

// // // Save Book Value In Stash
// // let stash = book; // Video

// // // Change Book Value
// // book = video; // Book

// // // Change Video Value
// // video = stash; // Video

// [book, video] = [video, book];

// console.log(book);
// console.log(video);



/* 118 - Destructuring Objects Part 1
  Destructuring
  - Destructuring Object
*/
// const user = {
//   theName: "Osama",
//   theAge: 39,
//   theTitle: "Developer",
//   theCountry: "Egypt",
// };

// // console.log(user.theName);
// // console.log(user.theAge);
// // console.log(user.theTitle);
// // console.log(user.theCountry);

// // let theName = user.theName;
// // let theAge = user.theAge;
// // let theTitle = user.theTitle;
// // let theCountry = user.theCountry;

// // console.log(theName);
// // console.log(theAge);
// // console.log(theTitle);
// // console.log(theCountry);

// // ({ theName, theAge, theTitle, theCountry } = user);
// const { theName, theAge, theCountry } = user;

// console.log(theName);
// console.log(theAge);
// console.log(theCountry);



/* 119 - Destructuring Objects Part 2
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   theTitle: "Developer",
//   theCountry: "Egypt",
//   theColor: "Black",
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };
// const { theName: n, theAge: a } = user; // تغيير أسم المتغيرات
// const {
//   theName: n,
//   theAge: a,
//   theCountry,
//   theColor: co = "Red",
//   skills: { html: h, css },
// } = user;

// console.log(n);
// console.log(a);
// console.log(theCountry);
// console.log(co);
// console.log(`My HTML Skill Progress Is ${h}`);
// console.log(`My CSS Skill Progress Is ${css}`);

// const { html: skillOne, css: skillTwo } = user.skills;

// console.log(`My HTML Skill Progress Is ${skillOne}`);
// console.log(`My CSS Skill Progress Is ${skillTwo}`);



/* 120 - Destructuring Function Parameters
  Destructuring
  - Destructuring Function Parameters
*/
// const user = {
//   theName: "Osama",
//   theAge: 39,
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };
// showDetails(user);
// // function showDetails(obj) {
// //   console.log(`Your Name Is ${obj.theName}`);
// //   console.log(`Your Age Is ${obj.theAge}`);
// //   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
// // }
// function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {
//   console.log(`Your Name Is ${n}`);
//   console.log(`Your Age Is ${a}`);
//   console.log(`Your CSS Skill Progress Is ${c}`);
// }



/* 121 - Destructuring Mixed Content
  Destructuring
  - Destructuring Mixed Content
*/
// const user = {
//   theName: "Osama",
//   theAge: 39,
//   skills: ["HTML", "CSS", "JavaScript"],
//   addresses: {
//     egypt: "Cairo",
//     ksa: "Riyadh",
//   },
// };

// function add({ theName: n, theAge: a, skills:[d, b, c], addresses: {egypt: e} } = user)
// {
//   console.log(`My Name Is: ${n}`);
//   console.log(`My Age Is: ${a}`);
//   console.log(`My Skills Is: ${d}, ${b}, ${c}`);
//   console.log(`My Address Is: ${e}`);
// };
// add();
// const {
//   theName: n,
//   theAge: a,
//   skills: [, , three],
//   addresses: { egypt: e },
// } = user;
// console.log(`Your Name Is: ${n}`);
// console.log(`Your Age Is: ${a}`);
// console.log(`Your Last Skill Is: ${three}`);
// console.log(`Your Live In: ${e}`);


                                        // إعادة
/* 122 - Destructuring Challenge
  Destructuring
  - Challenge
*/
// let chosen = 3;
// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];




/* 123 - Set Data Type And Methods
  - Set Data Type
  بيشيل العناصر المكررة
  Syntax: new Set(Iterable) لو في بيانات شبه بعض بيضيف واحد منها فقط
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index
  Properties:
  - size
  Methods:
  - add
  - delete
  - clear
  - has
*/
// let myData = [1, 1, 1, 2, 3, "A"];
// let myUniqueData = new Set([1, 1, 1, 2, 3]);
// let myUniqueData = new Set(myData);
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
// let myUniqueData = new Set();
// myUniqueData.add(1).add(1).add(1);
// myUniqueData.add(2).add(3).add("A");
// console.log(`Is Set Has => A ${myUniqueData.has("a".toUpperCase())}`);
// console.log(myData);
// console.log(myUniqueData);
// console.log(myUniqueData.size); // عدد العناصر
// console.log(myData[0]);
// console.log(myUniqueData[0]);
// myUniqueData.delete(2);
// console.log(myUniqueData.delete(2));
// console.log(myUniqueData);
// console.log(myUniqueData.size);
// myUniqueData.clear();
// console.log(myUniqueData);
// console.log(myUniqueData.size);



/* 124 - Set vs WeakSet And Garbage Collector
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/

// Type Of Data

// let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

// console.log(mySet);

// // Size
// console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

// // Values + Keys [Alias For Values]
// let iterator = mySet.keys();

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());

// // forEach

// mySet.forEach((el) => console.log(el));

// console.log("#".repeat(20));

// // Type Of Data

// let myws = new WeakSet([{ A: 1, B: 2 }]);

// console.log(myws);



/* 125 - Map Data Type vs Object
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
*/
// let myObject = {};
// let myEmptyObject = Object.create(null);
// let myMap = new Map();
// console.log(myObject);
// console.log(myEmptyObject);
// console.log(myMap);
// let myNewObject = {
//   10: "Number",
//   "10": "String",
// };
// console.log(myNewObject[10]);
// let myNewMap = new Map();
// myNewMap.set(10, "Number");
// myNewMap.set("10", "String");
// myNewMap.set(true, "Boolean");
// myNewMap.set({a: 1, b: 2}, "Object");
// myNewMap.set(function doSomething() {}, "Function");
// console.log(myNewMap.get(10));
// console.log(myNewMap.get("10"));
// console.log("####");
// console.log(myNewObject);
// console.log(myNewMap);



/* 126 - Map Methods
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has
  Properties
  --- size
*/
// let myMap = new Map([
//   [10, "Number"],
//   ["Name", "String"],
//   [false, "Boolean"],
// ]);
// // myMap.set(10, "Number");
// // myMap.set("Name", "String");
// console.log(myMap);
// console.log(myMap.get(10));
// console.log(myMap.get("Name"));
// console.log(myMap.get(false));
// console.log("####");
// console.log(myMap.has("Name"));
// console.log("####");
// console.log(myMap.size);
// console.log(myMap.delete("Name"));
// console.log(myMap.size);
// myMap.clear();
// console.log(myMap.size);



/* 127 - Map vs WeakMap
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/
// let mapUser = { theName: "Elzero" };
// let myMap = new Map();
// myMap.set(mapUser, "Object Value");
// mapUser = null; // Override The Reference
// console.log(myMap);
// console.log("#".repeat(20));
// let wMapUser = { theName: "Elzero" };
// let myWeakMap = new WeakMap();
// myWeakMap.set(wMapUser, "Object Value");
// wMapUser = null; // Override The Reference
// console.log(myWeakMap);



/* 128 - Array.from Method
  Array Methods
  - Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/
// console.log(Array.from("Osama"));
// console.log(
//   Array.from("12345", function (n) {
//     return +n + +n;
//   })
// );
// console.log(Array.from("12345", (n) => +n + +n));
// let myArray = [1, 1, 1, 2, 3, 4];
// let mySet = new Set(myArray);
// console.log(Array.from(mySet));
// // console.log([...new Set(myArray)]); // Future
// function af() {
//   return Array.from(arguments);
// }
// console.log(af("Osama", "Ahmed", "sayed", 1, 2, 3));



/* 129 - Array.copyWithin Method
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)
  "Copy Part Of An Array To Another Location in The Same Array"
  -- Any Negative Value Will Count From The End
  -- Target
  ---- Index To Copy Part To
  ---- If At Or Greater Than Array Length Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Ommited = Start From Index 0
  -- End
  ---- Index To End Copying From
  ---- Not Including End
  ---- If Ommited = Reach The End
*/
// let myArray = [10, 20, 30, 40, 50, "A", "B"];
// myArray.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]
// myArray.copyWithin(4, 6); // [10, 20, 30, 40, "B", "A", "B"]
// myArray.copyWithin(4, -1); // [10, 20, 30, 40, "B", "A", "B"]
// myArray.copyWithin(1, -2); // [10, "A", "B", 40, 50, "A", "B"]
// myArray.copyWithin(1, -2, -1); // [10, "A", 30, 40, 50, "A", "B"]
// console.log(myArray);



/* 130 - Array.some Method بيبحث في الأراي ولما بيلاقي النتيجة بيوقف اللوب مش بيكمل
  Array Methods لو عنصر واحد بينطبق عليه الشرط بيرجع (صحيح)
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range
*/
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let myNumber = 10;
// // let check = nums.some(function (e) {
// //   console.log("Test");
// //   return e > 5;
// // });
// let check = nums.some(function (e) {
//   return e > this;
// }, myNumber);
// // let check = nums.some((e) => e > 5);
// console.log(check);
// function checkValues(arr, val) {
//   return arr.some(function (e) {
//     return e === val;
//   });
// }
// console.log(checkValues(nums, 20));
// console.log(checkValues(nums, 5));
// let range = {
//   min: 10,
//   max: 20,
// };
// let checkNumberInRange = nums.some(function (e) {
//   // console.log(this.min);
//   // console.log(this.max);
//   return e >= this.min && e <= this.max;
// }, range);
// console.log(checkNumberInRange);



/* 131 - Array.every Method
  Array Methods كل العناصر لازم ينطبق عليها الشرط علشان ترجع (صحيح)
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
*/
// const locations = {
//   20: "Place 1",
//   30: "Place 2",
//   50: "Place 3",
//   40: "Place 4",
// };
// let mainLocation = 15;
// let locationsArray = Object.keys(locations);
// console.log(locationsArray);
// let locationArrayNumbers = locationsArray.map((n) => +n);
// console.log(locationArrayNumbers);
// let check = locationArrayNumbers.every(function (e) {
//   return e > this;
// }, mainLocation);
// console.log(check);



/* 132 - Spread Syntax And Use Cases
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String

// console.log("Osama");
// console.log(..."Osama");
// console.log([..."Osama"]);

// // Concatenate Arrays

// let myArray1 = [1, 2, 3];
// let myArray2 = [4, 5, 6];

// let allArrays = [...myArray1, ...myArray2];
// console.log(allArrays);

// // Copy Array

// let copiedArray = [...myArray1];
// console.log(copiedArray);

// // Push Inside Array

// let allFriends = ["Osama", "Ahmed", "Sayed"];
// let thisYearFriends = ["Sameh", "Mahmoud"];

// allFriends.push(...thisYearFriends);

// console.log(allFriends);

// // Use With Math Object

// let myNums = [10, 20, -100, 100, 1000, 500];
// console.log(Math.max(...myNums));

// // Spread With Objects => Merge Objects

// let objOne = {
//   a: 1,
//   b: 2,
// };
// let objTwo = {
//   c: 3,
//   d: 4,
// };
// console.log({ ...objOne, ...objTwo, e: 5 });



/* 133 - Map And Set Challenge                              إعادة
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/

// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];

// console.log("Your Solution Here"); // 210



/* 134 - Intro And What Is Regular Expression?
  Regular Expression
  - Email
  - IP
  - Phone
  - URL
*/
// let str1 = '10 20 100 1000 5000';
// let str2 = 'Os1 Os12 Os123 Os123Os Os12312Os123';

// let invalidEmail = 'Osama@@@gmail....com';
// let validEmail = 'o@nn.sa';

// let ip = '192.168.2.1'; // IPv4

// let url = 'elzero.org';
// let url = 'elzero.org/';
// let url = 'http://elzero.org/';
// let url = 'http://www.elzero.org/';
// let url = 'https://.elzero.org/';
// let url = 'https://www.elzero.org/';
// let url = 'https://www.elzero.org/?facebookid=asdasdasd';



/* 135 - Regular Expression – Modifiers
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive يعني الحروف غير حساسه
  g => global بيجيب كل النتائج
  m => Multilines

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.
*/
// let myString = "Hello Elzero Web School I Love elzero";
// let regex = /elzero/ig;
// console.log(myString.match(regex));



/* 136 - Regular Expression – Ranges Part 1
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9 كل الأرقام ما عدا الأرقام دي
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/
// let tld = "Com Net Org Info Code Io";
// let tldRe = /(info|org|io)/ig;
// console.log(tld.match(tldRe));

// let nums = "12345678910";
// let numsRe = /[0-2]/g;
// console.log(nums.match(numsRe));

// let notNums = "12345678910";
// let notNsRe = /[^0-2]/g;
// console.log(notNums.match(notNsRe));

// let specialNums = "1!2@3#4$5%678910";
// let specialNumsRe = /[^0-9]/g;
// console.log(specialNums.match(specialNumsRe));

// let practice = "Os1 Os1Os Os2 Os8 Os8Os";
// let practiceRe = /Os[5-9]Os/g;
// console.log(practice.match(practiceRe));



/* 137 - Regular Expression – Ranges Part 2
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/
// let myString = "AaBbcdefG123!234%^&*";
// let atozSmall = /[a-z]/g;
// let NotAtozSmall = /[^a-z]/g;
// let atozCapital = /[A-Z]/g;
// let NotAtozCapital = /[^A-Z]/g;
// let aAndcAnde = /[ace]/g;
// let NotaAndcAnde = /[^ace]/g;
// let lettersCapsAndSmall = /[a-zA-Z]/g;
// let numsAndSpecials = /[^a-zA-Z]/g;
// let specials = /[^a-zA-Z0-9]/g;
// console.log(myString.match(atozSmall));
// console.log(myString.match(NotAtozSmall));
// console.log(myString.match(atozCapital));
// console.log(myString.match(NotAtozCapital));
// console.log(myString.match(aAndcAnde));
// console.log(myString.match(NotaAndcAnde));
// console.log(myString.match(lettersCapsAndSmall));
// console.log(myString.match(numsAndSpecials));
// console.log(myString.match(specials));



/* 138 - Regular Expression – Character Classes Part 1
  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.
*/
// let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';
// let dot = /./g;
// let word = /\w/g;
// let valid = /\w@\w.(com|net)/g;
// console.log(email.match(dot));
// console.log(email.match(word));
// console.log(email.match(valid));



/* 139 - Regular Expression – Character Classes Part 2
  Regular Expression
  Character Classes
  لو في الأول يعني أي حاجه بتبدأ بالكلمه دي لو في الأخر يعني أي حاجه بتنتهي بالكلمة دي
  \b => matches at the beginning or end of a word.
  عكسها
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input)
*/
// let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
// let re = /(\bspam|spam\b)/ig;
// console.log(names.match(re));

// console.log(re.test(names));
// console.log(/(\bspam|spam\b)/ig.test("Osama"));
// console.log(/(\bspam|spam\b)/ig.test("1Spam"));
// console.log(/(\bspam|spam\b)/ig.test("Spam1"));



/* 140 - Regular Expression – Quantifiers Part 1
  Regular Expression

  Quantifiers
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one
*/
// let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// // let mailsRe = /\w+@\w+.(com|net)/ig;
// let mailsRe = /\w+@\w+.\w+/ig;
// console.log(mails.match(mailsRe));

// let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
// let numsRe = /0\d*0/ig;
// console.log(nums.match(numsRe));

// let urls = "https://google.com http://www.website.net web.com"; // http + https
// let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;
// console.log(urls.match(urlsRe));



/* 141 - Regular Expression – Quantifiers Part 2
  Regular Expression

  Quantifiers
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
*/
// let serials = "S100S S3000S S50000S S950000S";
// console.log(serials.match(/s\d{3}s/ig)); // S[Three Number]S
// console.log(serials.match(/s\d{4,5}s/ig)); // S[Four Or Five Number]S
// console.log(serials.match(/s\d{4,}s/ig)); // S[At Least Four]S



/* 142 - Regular Expression – Quantifiers Part 3
  Regular Expression

  Quantifiers
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/
// let myString = "We Love Programming";
// let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";
// console.log(/ing$/ig.test(myString));
// console.log(/^we/ig.test(myString));
// console.log(/lz$/ig.test(names));
// console.log(/^\d/ig.test(names));
// console.log(names.match(/\d\w{5}(?=Z)/ig));
// console.log(names.match(/\d\w{8}(?!Z)/ig));



/* 143 - Regular Expression – Replace With Pattern
  Regular Expression

  - replace
  - replaceAll
*/
// let txt = "We Love Programming And @ Because @ Is Amazing";
// console.log(txt.replace("@", "JavaScript"));
// console.log(txt.replaceAll("@", "JavaScript"));
// let re = /@/ig;
// console.log(txt.replaceAll(re, "JavaScript"));
// console.log(txt.replaceAll(/@/ig, "JavaScript"));



/* 144 - Regular Expression – Form Validation
  Regular Expression
  - Input Form Validation Practice
*/
// document.getElementById("register").onsubmit = function () {
//   let phoneInput = document.getElementById("phone").value;
//   let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
//   let validationResult = phoneRe.test(phoneInput);
//   if (validationResult === false) {
//     return false;
//   }
//   return true;
// }



/** 145 - Test Your Regular Expression And Discussions
 * المواقع الخاصة بإختبار ال Regular Expression
 * https://regexr.com/
 * https://www.regextester.com/
 * https://regex101.com/
 */



/* 146 - Regular Expression Challenge
  Regular Expression
  - Challenge
*/

// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

// let re = //;

// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));