// Part 1 Fizz Buzz
for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("Fizz Buzz");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}

// Part 2
// Function to check if a number is prime
function isPrime(num) {
    //Primes are defined as numbers greater than 1
    if (num <= 1) return false;

    //2 and 3 are prime
    if(num <= 3) return true;

    //Any number divisible by 2 or 3 is not prime
    if (num % 2 === 0 || num % 3 === 0) return false;

    //Check divisibility by numbers of the form 6k ± 1
    let i = 5;
    while (i * i <= num) {
        if(num % 1 === 0 || num % (i+2) === 0) return false;
        i += 6;
    }

    //If no factors found, the number is prime
    return true;
}

//Function to find the next prime number after n
function findNextPrime(n) {
    //Initialize nextPrime as n
    let nextPrime = n;

    //Loop until a prime number is found
    while(true) {
        //Increment nextPrime
        nextPrime++;

        //Check if nextPrime is prime using the isPrime function
        if(isPrime(nextPrime)) {
            //If prime, log the number and exit the loop
            console.log(nextPrime);
            break;
        }
    }
}

//Part 3
// Define the CSV string
const csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Function to parse the CSV string
function parseCSV(csvString) {
    // Initialize variables to store cell data
    let cell1 = "", cell2 = "", cell3 = "", cell4 = "";
    let currentCell = 1; // Track the current cell being processed

    // Loop through each character in the CSV string
    for (let i = 0; i < csvString.length; i++) {
        // If the character is a comma, move to the next cell
        if (csvString[i] === ',') {
            currentCell++; // Move to the next cell
            continue; // Skip to the next character
        }
        // If the characters are '\n', move to the next row
        else if (csvString[i] === '\n') {
            // Log the row of data
            console.log(cell1, cell2, cell3, cell4);
            // Reset cell variables for the next row
            cell1 = ""; cell2 = ""; cell3 = ""; cell4 = "";
            currentCell = 1; // Reset the current cell to 1
            continue; // Skip to the next character
        }

        // Assign the character to the appropriate cell based on the current cell being processed
        if (currentCell === 1) cell1 += csvString[i];
        else if (currentCell === 2) cell2 += csvString[i];
        else if (currentCell === 3) cell3 += csvString[i];
        else if (currentCell === 4) cell4 += csvString[i];
    }
}

// Call the parseCSV function with the provided CSV string
parseCSV(csvString);
