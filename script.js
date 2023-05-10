function match(input) {
    if (input && input.length % 2 !== 0) {
       return false;
    }
    const inputObj = [];
    let returnValue = true;
    for(let i of input) {
        if ((i === ')' && inputObj.pop() !== '(') 
            || (i === '}' && inputObj.pop() !== '{')
            || (i === ']' && inputObj.pop() !== '[')) {
            // returnValue = false;
            break;
        } else if (['[', '{', '('].indexOf(i) > -1) {
            inputObj.push(i);
        }
    }
    return inputObj.length === 0 ? true : false;
}

console.log("parenthesis check --- ", match("[[[[[[]]]]]]]"));
console.log("parenthesis check --- ", match("[[[[[[[]]]]]]]"));

ston = (function singleton() {
    function functionClass(age =10) {
        this.age = age;
    }
    let instance;
    return {
        getInstance : (age) => {
            if(!instance) instance = new functionClass(age);            
            return instance;
        }
    }
})()

console.log(ston.getInstance(15))
console.log(ston.getInstance())
console.log(ston.getInstance(10))

const a = ston.getInstance(15);
const b = ston.getInstance(10);
console.log("new Singleton --- ", a === b);