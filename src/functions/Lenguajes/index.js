import { FilterArray, RemoveDuplicatedValues, RemoveValueFromArray, ValidConj } from "../util"

const Concatenación = (leng1, leng2) => {
    const leng1Array = leng1.split(",")
    const leng2Array = leng2.split(",")
    let array = []
    for (const k in leng1Array) {
        for (const k2 in leng2Array) {
            array.push(leng1Array[k] + leng2Array[k2])
        }
    }
    return array
}

function* permutate(items, count) {
    yield* req([])

    function* req(array) {
        if (array.length == count) {
            yield array.join('')
            return
        }
        for (const item of items) {
            yield* req(array.concat(item))
        }
    }
}

const Potenciación = (leng1, p) => {
    const lengArray = leng1.split(",")
    const result = [...permutate(lengArray, p)]
    return result
}

const Inversa = (leng) => {
    const lengArray = leng.split(",")
    let newArray = []
    for (const key in lengArray) {
        newArray.push(lengArray[key].split("").reverse().join(""))
    }
    return newArray
}

const Unión = (leng, leng2) => {
    ValidConj(leng, leng2)
    const filteredArray = leng.split(",")
    const filteredArray2 = leng2.split(",")
    if (filteredArray.length === 0 || filteredArray2.length === 0) return
    const cleanedArray = RemoveValueFromArray(RemoveDuplicatedValues(filteredArray.concat(filteredArray2)), "")
    return cleanedArray
}

const Intersección = (leng1, leng2) => {
    ValidConj(leng1, leng2)
    const leng1Array = leng1.split(",")
    const leng2Array = leng2.split(",")
    let includedValues = []
    for (const value in leng1Array) {
        if (leng2Array.includes(leng1Array[value])) includedValues.push(leng1Array[value])
    }
    return RemoveDuplicatedValues(includedValues)
}

const Resta = (leng1, leng2) => {
    ValidConj(leng1, leng2)
    const leng1Array = leng1.split(",")
    const leng2Array = leng2.split(",")
    let includedValues = []
    for (const value in leng1Array) {
        if (!leng2Array.includes(leng1Array[value])) includedValues.push(leng1Array[value])
    }
    return RemoveDuplicatedValues(includedValues)
}

const Clausuras = leng => {
    const lengArray = leng.split(",")
    const maxIterations = 3
    let res = []
    for (let i = 1; i <= maxIterations; i++) {
        res.push([...permutate(lengArray, i)])
    }
    return res
}

export {
    Concatenación, Potenciación, Inversa, Unión, Intersección, Resta, Clausuras
}