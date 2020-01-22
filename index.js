// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(adjective="*") {
    return innerFunction = function(singleParameter = "special") {
        return `You are ${adjective}${singleParameter}${adjective}!`
    }
}

let Calculator = {
    return add = function (){
        return 1+3
    }
}

// console.log(wrapAdjective("%")("a dedicated programmer"))
// console.log(wrapAdjective()())