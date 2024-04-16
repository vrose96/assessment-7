// Sum Zero
function addToZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return true; 
            }
        }
    }
    return false;  
}
console.log(addToZero([]));        
console.log(addToZero([1]));         
console.log(addToZero([1, 2, 3]));  
console.log(addToZero([1, 2, 3, -2])); 

//addToZero runtime is O(n^2), n being the number of elements in the array.
//Space Complexity: O(1)
//This function doesn't need extra space that grows with the size of the input. It directly uses the input array without storing any additional large data structures, so the memory usage remains constant, no matter how big the array gets.

//Unique Characters

function hasUniqueChars(word) {
    const seenChars = new Set();  
    for (let char of word) {
        if (seenChars.has(char)) {
            return false;  
        }
        seenChars.add(char);  
    }
    return true;  
}
console.log(hasUniqueChars("Monday"));   
console.log(hasUniqueChars("Moonday")); 

//Runtime of the hasUniqueChars function is O(n), where n is the length of the string. 
//Space Complexity: O(1)
//The function uses a set to keep track of characters, but since there are only a limited number of characters (like the 26 English alphabet letters), the size of the set doesn't increase with longer words. Therefore, the amount of memory used doesn't change and remains very small.

//Pangram Sentence

function isPangram(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const seenLetters = new Set();
    const lowerCaseSentence = sentence.toLowerCase();
    for (let char of lowerCaseSentence) {
        if (alphabet.includes(char)) {
            seenLetters.add(char);
        }
    }
    return seenLetters.size === 26;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog!"));  
console.log(isPangram("I like cats, but not mice"));                    

//The runtime of the isPangram function is O(n), where n is the number of characters in the sentence.
//Space Complexity: O(1)
//This function also uses a set to track which alphabet letters appear in the sentence. The maximum items the set will ever hold is 26 (one for each letter), so no matter how long the sentence is, the space needed doesn't grow.

// Longest Word
function findLongestWord(words) {
    let maxLength = 0; 
    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;  
        }
    }
    return maxLength;  
}
console.log(findLongestWord(["hi", "hello"]));  

//The runtime of the findLongestWord function is O(n), where n is the number of words in the list.
//Space Complexity: O(1)
//The function only needs a small amount of space to keep track of the maximum length found as it looks through each word. It doesn't store the words themselves or create large structures, so the memory used remains constant regardless of the input list's size.

