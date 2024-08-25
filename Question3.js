function findMatches(pattern, str1) {
    const regex = new RegExp(pattern, 'g'); 
    return str1.match(regex); 
}

const testString1 = "Hello World! 123 @#$";

console.log("Digits:", findMatches('\\d', testString1));        
console.log("Uppercase Letters:", findMatches('[A-Z]', testString1));
console.log("Lowercase Letters:", findMatches('[a-z]', testString1)); 
console.log("Special Characters:", findMatches('[^a-zA-Z0-9]', testString1)); 
 