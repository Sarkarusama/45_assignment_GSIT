"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.
let alien_color = 'Green';
if (alien_color === "Green") {
    console.log("The player just earned 5 point ");
}
// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)
alien_color = 'Yellow';
if (alien_color === "Green") {
    console.log("The player just earned 5 point ");
}
