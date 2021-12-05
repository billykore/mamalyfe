const buatDeretBilangan = bilangan => {
    const deret = [bilangan]

    if (bilangan < 1) return 'Angka harus bernilai positif' 

    while (bilangan > 1) {
        if (bilangan % 2 == 0) {
            deret.push(bilangan / 2)
            bilangan /= 2
        } else {
            deret.push(2*bilangan + 2)
            bilangan = 2*bilangan + 2
        }
    }
    
    return `Deret: [${deret}] \nAngka: ${deret.length}`
}

console.log(buatDeretBilangan(7))
console.log(buatDeretBilangan(18))
console.log(buatDeretBilangan(-4))