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