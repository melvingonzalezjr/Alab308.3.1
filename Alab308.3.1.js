/* PART 1: FIZZ BUZZ
Accomplish the following:
Loop through all numbers from 1 to 100.
If a number is divisible by 3, log “Fizz.”
If a number is divisible by 5, log “Buzz.”
If a number is divisible by both 3 and 5, log “Fizz Buzz.”
If a number is not divisible by either 3 or 5, log the number.
*/
// for (let x = 1; x <= 100; x++) {
//     if (x % 3 == 0 && x % 5 == 0) { console.log(`Fizz Buzz`); }
//     else if (x % 3 == 0) { console.log(`Fizz`); }
//     else if (x % 5 == 0 ) { console.log(`Buzz`); }
//     else { console.log(x)}
// }

// Write a script that accomplishes the following:
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.
let n = 37;
n++;

while (n) {

    let isPrime = true;
    for (let j = 2; j <= n**0.5; j++) {
        if (n % j == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(n);
        break;
        }
    else {n++}
    
}






