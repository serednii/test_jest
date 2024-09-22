function* gen() {
    yield "nastia";
    yield "Ira";
    yield "Mykola";
    yield "Myron";
    yield "Olha";
    yield "Nadia";
}

const genn = gen()

console.log(genn.next())
console.log(genn.next())
console.log(genn.next())
console.log(genn.next())
console.log(genn.next())
console.log(genn.next())
console.log(genn.next())
let x = 1, y = 2

let z =
    x + y