function to_sort(arr) {
    let sorted = false
    while (!sorted) {
        sorted = true
        for (let value1 of arr) {
            let index1 = arr.indexOf(value1)
            let value2 = arr[index1 + 1]
            if (value1 > value2) {
                sorted = false
                arr[index1] = value2
                arr[index1 + 1] = value1
            }
        }
    }
    console.log(arr);
}
let nums = [1, 2, 3, 5, 367, 6, 94, 3, 6, 6, 3, 54, 7, 2, 65, 7]
to_sort(nums)



function randomID() {
    let result = ''
    let items = '0123456789abcdefghijklmnopqrstuvwxyz'
    let i = 0

    while (result.length !== 15) {
        result += items.charAt(Math.random() * items.length)
        i++
    }
    console.log(result);
}
randomID()