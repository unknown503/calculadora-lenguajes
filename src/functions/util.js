const ValidConj = (c1, c2) => {
    if (c1 === "" && c2 === "") return
}
const FilterArray = a => a.join('').split('')
const RemoveValueFromArray = (arr, v) => arr.filter(val => val !== v)
const RemoveDuplicatedValues = arr => [...new Set(arr)]

export {
    ValidConj, FilterArray, RemoveValueFromArray, RemoveDuplicatedValues
}