"use strict";
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien is green, print a message that the player earned 5 points.
//Version 1
let alienColors = "Red";
if (alienColors === "Green") {
    console.log("The player just earned 5 point for shooting the alien");
}
else if (alienColors === "Yellow") {
    console.log("The player just earned 10 points shooting the alien");
}
else if (alienColors === "Red") {
    console.log("The player just earned 15 points shooting the alien");
}
// • If the alien is yellow, print a message that the player earned 10 points.
//Version 2
alienColors = "Yellow";
if (alienColors === "Green") {
    console.log("The player just earned 5 point for shooting the alien");
}
else if (alienColors === "Yellow") {
    console.log("The player just earned 10 points for shooting the alien");
}
else if (alienColors === "Red") {
    console.log("The player just earned 15 points shooting the alien");
}
// • If the alien is red, print a message that the player earned 15 points.
//Version 3
alienColors = "Red";
if (alienColors === "Green") {
    console.log("The player just earned 5 point for shooting the alien");
}
else if (alienColors === "Yellow") {
    console.log("The player just earned 10 points shooting the alien");
}
else if (alienColors === "Red") {
    console.log("The player just earned 15 points for shooting the alien");
}
