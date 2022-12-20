function a() {
    let arr = [1,2,3,4,5,6,7]
    const numeros = arr.filter(e => e !== 5);
    return numeros
}

console.log(a())

function b() {
    let arr = [1,2,3,4,5,6,7]
    arr.forEach(e => console.log(e))
    return arr
}

console.log(b())


