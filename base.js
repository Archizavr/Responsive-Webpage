let a = 10;
let fruit = "apple";

if (a > 5 && fruit === "apple") {
    a = 1;
} else if (fruit = "orange") {
    a = -1;
} else {
    a = 2
};

console.log("count: " + a);

for (let i = 1; i < 4; i++) {
    console.log("Loop Nr" + i)
};

let simpleArray = ["house", "car", "money"];
console.log("Arrays: " + simpleArray + "length = " + simpleArray.length);
simpleArray.push("jeep");
console.log("First item:" + simpleArray[0]);
simpleArray[0] = "office";
simpleArray[2] = "bike";
console.log("simpleArray after modifications: " + simpleArray);

let simpleJson = {
    color: "red",
    vehicle: "car",
    speed: 233
}
console.log("Type of vehicle " + simpleJson["vehicle"]);

let exerciseArray = [1, 3, 5];

for (let i = 3; i < 15; i++) {
    console.log("Iterator = " + i);
    if (i > 10) {
        exerciseArray.push(i)
    }
};
console.log(exerciseArray);