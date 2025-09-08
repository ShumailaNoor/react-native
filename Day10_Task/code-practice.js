//--> Convert an array of strings to an array of their lengths using map().
let arrayOfStrings = ["Apple", "Banana", "Peech", "Strawberry", "Leeche", "Kiwi"];
let arrayLenghts = arrayOfStrings.map(strings => strings.length);
console.log("Converted strings array into their lengths: ", arrayLenghts);


//--> Use filter() to find words longer than 5 characters.
let filteredArray = arrayOfStrings.filter (strings => strings.length>5);
console.log("\nFiltered strings array: ", filteredArray);

//--> Use reduce() to find the maximum number in an array.
maxNumber = arrayLenghts.reduce((maxNum, currentNum) => currentNum > maxNum ? currentNum : maxNum, arrayLenghts[0]);
console.log("\nMaximum Number: ", maxNumber);

//--> Combine map + filter to first double values, then keep values > 10.
mappedandFilteredArray = arrayLenghts.map(lengths => lengths * 2).filter(lengths => lengths > 10);
console.log("\nMapped + Filtered Array: ", mappedandFilteredArray);

//--> Flatten a 2D array using reduce().
let array2D = [[1,2], [3,4], [5,6], [7,8]];
let flatenedArray = array2D.reduce((accumulator, currentValue) => accumulator.concat(currentValue), [array2D[0]],);
console.log("\nFlatened Array: ", flatenedArray);

