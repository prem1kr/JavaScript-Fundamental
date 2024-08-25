function outerFunction(outerParameter) {
    const outerVariable = "Hello from outerfunction";

    function innerFunction() {
        console.log(outerVariable); 
        console.log(outerParameter);    
    }

    return innerFunction;
}

const myInnerFunction = outerFunction("Passed Parameter");

myInnerFunction();
