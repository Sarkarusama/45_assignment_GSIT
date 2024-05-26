"use strict";
// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
const magician = ["Herry Porter", "Harmione Granger", "RON Wasely"];
function show_magicians(magicians) {
    magician.forEach(element => {
        console.log(element);
    });
}
show_magicians(magician);
