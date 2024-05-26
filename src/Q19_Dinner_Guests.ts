let Guest = ["Saad", "Awais", "Farhan"];

// console.log("Good news! we find a big table so we are invite 3 more guest");

Guest.unshift("Ahmed");
Guest.splice(1, 0, "Usama");
Guest.push("Faisal");

// // for (let i = 0; i < Guest.length; i++) {
// //   console.log(
// //     `Dear Mr ${Guest[i]}\nit is pleasure to invite you to our dinner `
// //   );
// }
// console.log(`sorry dinner table not arrive, only two guest invited`);

while (Guest.length > 2) {
  let removeguest = Guest.pop();
//   console.log(`sorry ${removeguest}\nyou are not invited our dinner`);
}

// for (let i = 0; i < Guest.length; i++) {
//   console.log(`Dear Mr ${Guest[i]}\nyou are still invited `);
// }
Guest.splice(0, 2);
console.log(Guest);

//Excercise 19

console.log(`Total number of Guest are ${Guest}`);