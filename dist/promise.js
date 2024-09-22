
async function randomNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numberRandom = Math.random() * 100
            if (numberRandom >= 20 && numberRandom <= 70) {
                resolve(numberRandom)
            } else {
                reject(false)
            }
        }, 500);
    })
}


const fun = async function () {
    try {
        const res = await randomNumber()
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}
fun()