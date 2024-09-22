
//8888888888888888888888888888888888888888888888888888888888888888888

// const a = [
//     { from: 'd', to: 'e' },
//     { from: 'f', to: 'g' },
//     { from: 'a', to: 'b' },
//     { from: 'b', to: 'c' },
//     { from: 'e', to: 'f' },
//     { from: 'c', to: 'd' },

// ]

// const tickets = [
//     { from: 'Калининград', to: 'Челябинск' },
//     { from: 'Москва', to: 'Калининград' },
//     { from: 'Пятигорск', to: 'Краснодар' },
//     { from: 'Челябинск', to: 'Астана' },
//     { from: 'Краснодар', to: 'Москва' },
// ]


// const routeMap = new Map()
// const seenDestinations = new Set()

// tickets.forEach(ticket => {
//     routeMap.set(ticket.from, ticket.to)
//     seenDestinations.add(ticket.to)
// })

// let start = null

// for (const ticket of tickets) {
//     if (!seenDestinations.has(ticket.from)) {
//         start = ticket.from
//     }
// }

// const sortedTickets = []
// let current = start

// while (current) {
//     const next = routeMap.get(current);
//     next && sortedTickets.push({ from: current, to: next });
//     current = next;
// }

// console.log(routeMap)
// console.log(seenDestinations)
// console.log(sortedTickets)
//8888888888888888888888888888888888888888888888888888888888888888888


//88888888888888888888888888888888888888888888888888888888888888888888
// let limits = {
//     500: 5,
//     5000: 5,
//     100: 5,
//     10: 50,
//     1000: 5,
//     50: 13,
//     3: 100,
//     20: 10,
//     5: 20,
//     1: 200,
// }

// let denomination = Object.keys(limits).map(Number).sort((a, b) => b - a);
// let sum = 1650
// let result = {}

// for (let demon of denomination) {
//     let count = Math.min(Math.floor(sum / demon), limits[demon])
//     if (count > 0) {
//         result[demon] = count
//         sum -= count * demon
//     }
// }

// if (sum > 0) {
//     console.log(' neni')
// }

// Object.keys(result).forEach(key => {
//     limits[key] -= result[key]
// })


// console.log(result)
// console.log(limits)

//8888888888888888888888888888888888888888888888888888888888888888888

//8888888888888888888888888888888888888888888888888888888888888888888
// const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
// const s = 'teetbookrds'
// const mid = Math.floor(s.length / 2)
// const a = s.slice(0, mid)
// let b = s.substring(mid, s.length)

// a.length !== b.length && (b = b.slice(0, -1))

// console.log(a)
// console.log(b)
// function lengthSymbol(str) {
//     return str.split('').reduce((a, e) => set.has(e) ? a + 1 : a, 0)
// }
// const counter_1 = lengthSymbol(a)
// const counter_2 = lengthSymbol(b)


// console.log(counter_1 === counter_2)





// console.log(a)
// console.log(b)

//8888888888888888888888888888888888888888888888888888888888888888888

//8888888888888888888888888888888888888888888888888888888888888888888

// function xx({
//     targetElement = undefined,
//     interval = 35,
//     targetElementPositionX = 0,
//     targetElementPositionY = 0
// }) {
//     if (!targetElement) return;

//     const array = [{ x: 0, y: 0 }]
//     const targetMove = document.querySelector(`#${targetElement}`)

//     document.body.addEventListener('mousemove', function (event) {
//         const x = event.clientX;
//         const y = event.clientY;
//         array.unshift({ x, y })
//     });

//     let xx = 0
//     let yy = 0

//     setInterval(() => {
//         if (array.length > 0) {
//             const { x, y } = array.pop()
//             xx = x
//             yy = y
//         }
//         targetMove.style.left = (xx + targetElementPositionX) + 'px'; // например, '123px', значение вычисляется во время работы скрипта
//         targetMove.style.top = (yy + targetElementPositionY) + 'px';
//     }, interval)

// }

// xx({
//     targetElement: 'moon',
//     interval: 35,
//     targetElementPositionX: -20,
//     targetElementPositionY: -20,
// })

function LN(val, next = null) {
    this.val = val;
    this.next = next;


}

function createLIst(arr, node = null, start = null) {

    if (arr.length === 0) {
        return start -
    } else {
        const data = arr.shift()
        if (node)
            return createLIst(arr, node.next = new LN(data), start)
        else {
            start = new LN(data)
            return createLIst(arr, start, start)
        }
    }
}

const res = createLIst([1, 2, 3, 4, 5, 6])
// console.log(res)
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;


}

var mergeTwoLists = function (list1, list2) {
    // Создаем фиктивный (временный) узел, чтобы упростить процесс слияния
    let dummy = new ListNode(-1);
    let current = dummy;

    // Проходим по обоим спискам, пока не достигнем конца одного из них
    while (list1 !== null && list2 !== null) {

        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Если один из списков еще не пуст, добавляем оставшиеся элементы
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }



    // Функция для печати списка
    function printList(head) {
        let current = head;
        let str = ''
        while (current !== null) {
            // process.stdout.write(current.val + " ");
            str += current.val + ' '
            current = current.next;
        }
        console.log();
    }
    console.log(mergedList)
    // printList(mergedList); // 1 1 2 3 4 4


    // window.requestAnimationFrame(draw);


    // function draw() {
    // console.log('kjhkj')

    // window.requestAnimationFrame(draw);
    // }



    //8888888888888888888888888888888888888888888888888888888888888888888




    // a.forEach(element => {
    //     console.log(element.from + ' ' + element.to)
    // });

    console.log("l".localeCompare("f"))