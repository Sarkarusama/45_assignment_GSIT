const ordinalNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

ordinalNum.forEach((seprateLine) => {
  if (seprateLine === "1") {
    console.log("1st");
  } else if (seprateLine === "2") {
    console.log("2nd");
  } else if (seprateLine === "3") {
    console.log("3rd");
  } else {
    console.log(seprateLine + "th");
  }
});
