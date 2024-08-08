/* PART 1: FIZZ BUZZ
Accomplish the following:
Loop through all numbers from 1 to 100.
If a number is divisible by 3, log “Fizz.”
If a number is divisible by 5, log “Buzz.”
If a number is divisible by both 3 and 5, log “Fizz Buzz.”
If a number is not divisible by either 3 or 5, log the number.
*/
for (let x = 1; x <= 100; x++) {
    if (x % 3 == 0 && x % 5 == 0) { console.log(`Fizz Buzz`); }
    else if (x % 3 == 0) { console.log(`Fizz`); }
    else if (x % 5 == 0 ) { console.log(`Buzz`); }
    else { console.log(x)}
}

/*PART 2: PRIME TIME
Write a script that accomplishes the following:
Declare an arbitrary number, n.
Create a loop that searches for the next prime number, starting at n and incrementing from there.
As soon as you find the prime number, log that number and exit the loop. 
*/
let nOriginal = 2;
let n = nOriginal + 1;                  //n bc we don't use nOriginal. 

while (n) {                             
  let isPrime = true;                   //isPrime = true isn't necessarily "True" for initial n. Just a bool placeholder
  for (let j = 2; j <= n ** 0.5; j++) { //2 <= j <= n ** 0.5 bc composite numbers have factors in that range.
    if (n % j == 0) {                   //if j divides into n, isPrime = false, therefore break for-loop. 
      isPrime = false;                  //and drops down to line 35, where n++ now to retry until we get prime
      break;
    }
  }

  if (isPrime) {                        //if you go through all the j and isPrime is still True: print, break out of 
    console.log(`First prime number after ${nOriginal} is ${n}`);                                       //while-loop
    break;
  } else {
    n++;
  }
}

/* PART 3: FEELING LOOPY
CSV data looks like this:
ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
Not very nice to look at. The “\n” is an escaped Line Feed, which indicates that the following data should begin on a new line, as follows:

ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26
*/
let csvData =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let cell = "";

let row1 = "";
let row2 = "";
let row3 = "";
let row4 = "";

let currentRow = 1;

//First define the Rows
for (let i = 0; i < csvData.length; i++) {
  if (csvData[i] == "\n") {
    currentRow++;                       //base case: if character is \n, move to next Row. Next row adds char's until \n
    continue;
  }

  if (currentRow == 1) {
    row1 += csvData[i];
  } else if (currentRow == 2) {
    row2 += csvData[i];
  } else if (currentRow == 3) {
    row3 += csvData[i];
  } else if (currentRow == 4) {
    row4 += csvData[i];
  }
}

//Print out cells in Row 1
for (let i = 0; i <= row1.length; i++) {
  if (row1[i] == ",") {
    cell += " ";                        //For each row: when character is ',' then replace with space, keep adding
  }                                     //characters until you reach row's length. Then print cell before resetting cell
  else if (i == row1.length) {          //for use by other Rows.               
    console.log(cell);
    cell = "";
  } else {
    cell += row1[i];
  }
}

//Print out cells in Row 2
for (let i = 0; i <= row2.length; i++) {
  if (row2[i] == ",") {
    cell += " ";
  } else if (i == row2.length) {
    console.log(cell);
    cell = "";
  } else {
    cell += row2[i];
  }
}

//Print out cells in Row 3
for (let i = 0; i <= row3.length; i++) {
  if (row3[i] == ",") {
    cell += " ";
  } else if (i == row3.length) {
    console.log(cell);
    cell = "";
  } else {
    cell += row3[i];
  }
}

//Print out cells in Row 4
for (let i = 0; i <= row4.length; i++) {
  if (row4[i] == ",") {
    cell += " ";
  } else if (i == row4.length) {
    console.log(cell);
    cell = "";
  } else {
    cell += row4[i];
  }
}
