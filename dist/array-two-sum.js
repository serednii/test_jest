function isSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const sum = arr[left] + arr[right];
        if (target === sum) {
            return {
                isSum: true,
                pointers: [left, right]
            };
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return {
        isSum: false,
        pointers: []
    };
}

const res = isSum([2, 2, 4, 8, 5], 10);
console.log(res);
