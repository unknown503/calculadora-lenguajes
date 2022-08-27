import { ValidConj, FilterArray, RemoveValueFromArray, RemoveDuplicatedValues } from "../util"

const pertenencia = (conj1, conj2) => {
    ValidConj(conj1, conj2)
    const conj1Array = conj1.split(",")
    if (conj1Array.length === 0) return
    return conj1Array.some(v => v === conj2)
}

const union = (conj1, conj2) => {
    ValidConj(conj1, conj2)
    const filteredConj2 = FilterArray(conj2.split(","))
    if (filteredConj2.length === 0) return
    const cleanedArray = RemoveDuplicatedValues(conj1.split(",") + "," + filteredConj2)
    return RemoveValueFromArray(cleanedArray, ",")
}

const Intersección = (conj1, conj2) => {
    ValidConj(conj1, conj2)
    const conj1Array = conj1.split(",")
    const conj2Array = conj2.split(",")
    let includedValues = []
    for (const value in conj1Array) {
        if (conj2Array.includes(conj1Array[value])) includedValues.push(conj1Array[value])
    }
    return FilterArray(includedValues)
}

const Complemento = (conj1, conj2) => {
    ValidConj(conj1, conj2)
    const conj1Array = conj1.split(",")
    const conj2Array = conj2.split(",")
    let includedValues = []
    for (const value in conj1Array) {
        if (!conj2Array.includes(conj1Array[value])) includedValues.push(conj1Array[value])
    }
    return FilterArray(includedValues)
}

const Diferencia_absoluta = (conj1, conj2) => {
    ValidConj(conj1, conj2)
    const conj1Array = conj1.split(",")
    const conj2Array = conj2.split(",")
    let includedValues = []
    for (const value in conj1Array) {
        if (!conj2Array.includes(conj1Array[value])) includedValues.push(conj1Array[value])
    }
    return FilterArray(includedValues)
}

const Diferencia_simétrica = (conj1, conj2) => {
    ValidConj(conj1, conj2)
    const conj1Array = conj1.split(",")
    const conj2Array = conj2.split(",")
    const valuesToRemove = []

    for (let i = 0; i < conj1Array.length; i++) {
        for (let j = 0; j < conj2Array.length; j++) {
            if (conj1Array[i] === conj2Array[j]) {
                valuesToRemove.push(conj1Array[i])
            }
        }
    }
    let finalArray = conj1Array.concat(conj2Array)
    for (const v in valuesToRemove) finalArray = RemoveValueFromArray(finalArray, valuesToRemove[v])

    return FilterArray(finalArray)
}

export { pertenencia, union, Intersección, Complemento, Diferencia_absoluta, Diferencia_simétrica }