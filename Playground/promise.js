/*const myPromise = new Promise(function (resolve, reject) {
    const random = Math.round(Math.random() * 100)

    //to simulate asynchronous operation
    setTimeout(() => {
        if (random % 2 == 0) {
            resolve(random)
        }
        else {
            reject(random)
        }
    }, 1500)

})


myPromise
    .then(function (val) {
        console.log('promise resolved', val)
    })
    .catch(function (err) {
        console.log('promise rejected', err)
    }) */


const generateNumber = function () {
    return new Promise(function (resolve, reject) {
        const random = Math.round(Math.random() * 100)

        //to simulate asynchronous operation
        setTimeout(() => {
            if (random % 2 == 0) {
                resolve(random)
            }
            else {
                reject(random)
            }
        }, 1500)

    })
}

generateNumber(11)
    .then(function (val) {
        console.log('promise resolved', val)
    })
    .catch(function (err) {
        console.log('promise rejected', err)
    })



//how to create axios, using promise

const axios = {
    get: function (url) {
        return new Promise(function (resolve, reject) {
            const xhr = new XMLHttpRequest()
            xhr.open('GET', url)
            xhr.send()
            xhr.onload = function () {
                resolve(JSON.parse(xhr.responseText))
            }
            xhr.onerror = function () {
                reject(xhr.responseText)
            }
        })
    }
}

axios.get('http://jsonplaceholder.typicode.com/users')
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log(err)
    })


