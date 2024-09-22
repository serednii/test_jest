class Person {

    static personNumber = 0;
    #name = "";
    age = null;

    constructor(name, age, city) {
        Person.personNumber++;
        this.#name = name;
        this.age = age;
        this.city = city;
    }

    get name() {
        return `name = ${this.#name}`
    }

    set name(value) {
        this.#name = value[0].toUpperCase() + value.slice(1)
    }

    sleep() {
        console.log('Sleep...')
    }

    eat() {
        console.log("Eat...")
    }

}

class Developer extends Person {
    writeCode() {
        console.log('Write code...')
    }
    eat() {
        super.eat()
        console.log('person eat')
    }


}

const person1 = new Person('kola', 45, 'Drogobych')
const person2 = new Person('kola', 45, 'Drogobych')
const person3 = new Person('kola', 45, 'Drogobych')
const person4 = new Person('kola', 45, 'Drogobych')
const person5 = new Person('kola', 45, 'Drogobych')
const person6 = new Person('kola', 45, 'Drogobych')
person1.name = "mykola"
console.log(person1.name)
console.log(Person.personNumber)

const dev = new Developer()
dev.sleep()
dev.writeCode()
dev.eat()