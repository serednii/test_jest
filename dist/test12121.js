
// "use strict"
// var tomson = "tomson";

// const obj = {
//     name: "Mykola",
//     age: 45,
//     weight: 65,
//     sum: function () {
//         return new Promise((resolve, reject) => {
//             console.log('resolve:', this); // `this` will refer to `obj` or bound object
//             resolve(this);  // Resolve the promise with `this`
//         }).then(result => {
//             console.log('Promise resolved with:', result);
//             return result
//         }).catch(() => {
//             console.log('reject');
//         });
//     },
//     sum1: function () {
//         setTimeout((function () {
//             console.log(this)
//         }).bind(this))
//     }
// }

// obj.sum1()
const obj = {
    name: "Mykola",
    age: 45,
    weight: 65,
    sum: function () {
        console.log(this)
    },
    sum1: function () {
        setTimeout((function () {
            console.log(this)
        }).bind(this))
    }
}

const obj1 = {
    name: "Mykola",
    age: 425,
    weight: 615,
}

obj.sum.call(obj1);

const newObj = obj.sum.bind(obj1);
newObj();

function fBtn() {
    // console.log(this);
    const that = this
    setTimeout(function () {
        console.log(that)
    }, 1000)
}

fBtn()
const newFBtn = fBtn.bind(obj)
const btn = document.querySelector('.btn');
btn?.addEventListener('click', newFBtn);




// const obj = {
//     name: "Mykola",
//     age: 45,
//     weight: 65,
//     sum: function () {
//         return new Promise((resolve, reject) => {
//             console.log('resolve:', this); // `this` буде посилатися на `obj` або прив'язаний об'єкт
//             resolve(this);  // Резолвимо проміс з this
//         }).then(result => {
//             console.log('Promise resolved with:', result);
//             return result;  // Повертаємо результат, щоб він не був undefined
//         }).catch(() => {
//             console.log('reject');
//         });
//     }
// };

// // Виклик функції та очікування результату
// obj.sum().then(result => {
//     console.log("Отримано результат:", result);  // Тут вже не буде undefined
// });

































// console.log(newObj())

// console.log(obj.sum.apply(obj1))

// function names(name1, name2) {
//     this.name1 = name1;
//     this.name2 = name2;
//     console.log(this)
// }

// names.prototype.number = 45;

// // const newNames = new names("dfgdfg", "dfgdfg")
// // console.log(newNames.number)
// // names("Dfgdgf", "dffg")


// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }

// Product.prototype.lisa = function (a, b, c) {
//     return a + b + c;
// }


// const p = new Product("gffgh", 41)
// console.log(p.lisa(4, 5, 6))
// p.lisa.prototype.lena = () => {
//     return 56
// }

// const newLena = new p.lena()


// function Food(age) {
//     this.age = age;
//     this.category = "eda";
// }


// const newFood = new Food("Robert");

// Product.call(newFood, "Vlasta", 4654);
// console.log(newFood.category);
// console.log(newFood.name);
// console.log(newFood.price);
// console.log(newFood.age);


// const newFood1 = new Food("lolita");
// Product.call(newFood1, "exc", 555)
// console.log(newFood1.category);
// console.log(newFood1.name);
// console.log(newFood1.price);
// console.log(newFood1.age);

// function myFunction() {
//     function myFunction1() {
//         console.log(this)
//     }
//     myFunction1()
// }

// myFunction()


// function CreateItem(title, price) {
//     this.title = title
//     this.price = price
//     this.print = function (name) {
//         console.log(this.title + name)
//     }
//     // console.log(this)
//     return 125

// }


// const arr = [new CreateItem("kola", 3453), new CreateItem("nadia", 333), new CreateItem("ira", 90), new CreateItem("nasta", 1235)]

// console.log(arr)
// const x = new CreateItem("news", 456)

// console.log(x)
// const x1 = new CreateItem("news1", 455666)

// console.log(x1)
// const x2 = new CreateItem("news2", 4565756)

// console.log(x2)
// const x3 = new CreateItem("news3", 45444456)

// x3.print("mhsshj")





// let car = {
//     model: 'BMV'
// }

// console.log(car)


// const user = new Object({
//     name: "dfgdfg",
//     age: 34,
//     write: function () {
//         console.log("hello")
//     }
// })

// Object.prototype.print1 = function () {
//     console.log('prijkhjkhjhnt')
// }




// const foo = Symbol('foo')
// const myObj = {

// }

// myObj['foo'] = 'bar'
// myObj[foo] = 'baz'
// myObj['lok'] = 'bazlok'


// myObj.foo


// for (let key in myObj) {
//     console.log(`${key} = ${myObj[key]}`)
// }

// console.log(myObj[foo])

const fun = function () {
    console.log(this)
}

fun()