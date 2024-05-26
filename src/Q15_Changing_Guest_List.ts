let guest_list = ["Saad", "Awais", "Farhan"];

for (let el of guest_list) {
  console.log(`Dear Mr ${el}\nit is pleasure to invite you to our dinner `);
}

let absent_guest = "Saad";
let new_guest = "Shoaib";

guest_list[0] = new_guest;

for (let el of guest_list) {
  console.log(`Dear Mr ${el}\nit is pleasure to invite you to our dinner `);
}

console.log(`${absent_guest} is not coming our dinner `);