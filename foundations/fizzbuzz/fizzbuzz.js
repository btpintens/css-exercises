// prompt user to enter number

// if number is divisable by 3, print fizz

// if number divisable by 5, print buzz

// if number divisable by both, print FizzBuzz

// if number is not divisiably by either 5 or 3, print number 
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {
    const answer = parseInt(input);

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if
        (i % 3 === 0) {
        console.log("Buzz");
    } else if
        (i % 5 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}
rl.close();
});
