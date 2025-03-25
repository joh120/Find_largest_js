// Find the Largest Number

// Write a function that takes an array of numbers and returns the largest number.
function findLargest(arr) {
    let max = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max)
            max = arr[i] 
    }
 return max
}

console.log(findLargest([3, 7, 2, 9, 5])); // prints -> 9