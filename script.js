// Define function firstLetterName
function firstLetterName(name) {
    const firstLetter = name[0];
    alert("The name, " + name + ", starts with the letter " + firstLetter + ".");
}

// Define function divisibleByTwo
function divisibleByTwo(number) {
    return number % 2 === 0;
}

// Define function largestNum
function largestNum(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
        largest = arr[i];
}
    }
    return largest;
}

// Call functions with sample arguments
// Output: "The name Ashlee starts with the letter A"
firstLetterName("Ashlee"); 
// Output: true
console.log(divisibleByTwo(4)); 
// Output: 8
console.log(largestNum([3, 7, 2, 8, 4, 1, 5])); 