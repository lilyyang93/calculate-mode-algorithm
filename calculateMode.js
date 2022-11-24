exports.calculateMode = function(array) {
    let obj = {}
    let mode = 0
    let result = []
    for (let element of array) {
        if (!obj[element]) {
            obj[element] = 1
        } else {
            obj[element] += 1
        }
    }
    for (let char in obj) {
        if (obj[char] > mode) {
            mode = obj[char]
        }
    }
    for (let char in obj) {
        if (obj[char] == mode) {
            result.push(char)
        }
    }
    return result
}