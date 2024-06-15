// Let’s try 5 array operations.
// Create an array styles with items “James” and “Brennie”.
// Append “Robert” to the end.
// Replace the value in the middle by “Calvin”. 

// Your code for finding the middle value should work for any
// arrays with odd length.

// Remove the first value of the array and show it.
// Prepend Rose and Regal to the array.

// James, Brennie
// James, Brennie, Robert
// James, Calvin, Robert
// Calvin, Robert
// Rose, Regal, Calvin, Robert


let styles = ["James", "Brennie"];
console.log(styles);

styles.push("Robert");

console.log(styles);

let MiddleIndex = Math.floor(styles.length / 2);
styles.splice(MiddleIndex, 1, "Calvin");

console.log(styles);

styles.shift();

console.log(styles);

styles.unshift("Rose","Regal");

console.log(styles);