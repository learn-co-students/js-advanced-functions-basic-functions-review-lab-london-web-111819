// Your code here
const saturdayFun = (string="roller-skate") => `This Saturday, I want to ${string}!`
const mondayWork = (string="go to the office") => `This Monday, I will ${string}.`
const wrapAdjective = (flair="*") => (string="special") => `You are ${flair}${string}${flair}!`
const Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
}
const actionApplyer = (int, array) => {
    let value = int
    for (let i = 0; i < array.length; i++ ){
      value = array[i](value)
    }
  
    return value
}