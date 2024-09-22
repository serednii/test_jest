function sum(a, b, c) {
    return a + b + c;
}

const rotateString = (str) => {
    let newStr = "";
    str = str.trim();
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr;
}

// console.log(rotateString("  hello people "))

module.exports = { sum, rotateString };
// console.log(sum(2, 5, 9))

// let result = carry(sum)
// const plusTwo = result(22)
// console.log(plusTwo(2, 5))

// function carry(f) {
//     return function curried(...args) {
//         if (args.length >= f.length) {
//             return f.apply(this, args)
//         } else {
//             return (...args2) => {
//                 return curried.apply(this, args.concat(args2))
//             }
//         }
//     }

// }

// // carry(sum)

// function multiply(a) {
//     return function (b) {
//         return function (c) {
//             return a * b * c;
//         }
//     }
// }

// const mul1 = multiply(5)
// const mult2 = mul1(12)(45)
// console.log(mult2)