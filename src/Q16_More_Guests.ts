let guestlist = ["Saad", "Awais", "Farhan"];

// for(let el of guest_list){
//     console.log(`Dear Mr ${el}\nit is pleasure to invite you to our dinner `);
// }
// let absentguest = "Saad";
// let newguest ="Shoaib";

// guestlist[0]=newguest;

// // for(let el of guestlist){
// //     console.log(`Dear Mr ${el}\nit is pleasure to invite you to our dinner `);
// // }

// console.log(`${absentguest} is not coming our dinner `);

console.log("Good news! we find a big table so we are invite 3 more guest");

guestlist.unshift("Ahmed");
guestlist.splice(1, 0, "Usama");
guestlist.push("Faisal");

for (let el of guestlist) {
  console.log(`Dear Mr ${el}\nit is pleasure to invite you to our dinner `);
}
