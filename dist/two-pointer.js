function getSquare(arr) {
    const newArr = []
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        const leftSquare = arr[left] ** 2
        const rightSquare = arr[right] ** 2

        if (leftSquare > rightSquare) {
            newArr.unshift(leftSquare)
            left++
        } else {
            newArr.unshift(rightSquare)
            right--
        }
    }
    return newArr
}
const arr = [-10, -8, -5, -3, -2, 0, 4, 8, 12, 15, 17]
console.log(arr.map(el => el ** 2).join(', '))
const res = getSquare(arr)
console.log(res.join(', '))