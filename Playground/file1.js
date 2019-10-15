const city = 'Bangalore'
const greet = function () {
    console.log('Hello World')
}
greet()

//if multiple values needs to be exported we pass them in an object
module.exports = {
    city,
    greet
}