function testRegex(pattern, str) {
    const regex = new RegExp(pattern); 
    return regex.test(str);
}

console.log(testRegex('hello', 'hello world'));   
console.log(testRegex('world$', 'hello world'));  
console.log(testRegex('^hello', 'hello world'));  
console.log(testRegex('test', 'this is a test'));
console.log(testRegex('\\d+', '123abc'));         
console.log(testRegex('\\d+', 'abc'));         
console.log(testRegex('^abc$', 'abc'));           
console.log(testRegex('^abc$', 'abc123'));       
