let guest = ["Saad", "Awais", "Farhan"];

console.log("Good news! we find a big table so we are invite 3 more guest");

guest.unshift("Ahmed");
guest.splice(1, 0, "Usama");
guest.push("Faisal");

for (let i = 0; i < guest.length; i++) {
  console.log(
    `Dear Mr ${guest[i]}\nit is pleasure to invite you to our dinner `
  );
}
console.log(`sorry dinner table not arrive, only two guest invited`);

while (guest.length > 2) {
  let removeguest = guest.pop();
  console.log(`sorry ${removeguest}\nyou are not invited our dinner`);
}

for (let i = 0; i < guest.length; i++) {
  console.log(`Dear Mr ${guest[i]}\nyou are still invited `);
}
guest.splice(0, 2);
console.log(guest);