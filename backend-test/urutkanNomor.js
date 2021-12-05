const urutkanNomor = string => {
    const arr = [...string]
    let result = []

    arr.forEach(char => {
        isNumber = parseInt(char)
        if (!isNaN(isNumber)) {
            result.push(isNumber)
        }
    })

    if (result.length === 0) {
        return 'nomor tidak ditemukan'
    }

    const unique = [...new Set(result)] 
    return unique.sort().join('')
}

console.log(urutkanNomor("84923532"))
console.log(urutkanNomor("mamalyfe"))
console.log(urutkanNomor("m4m4l1f3"))