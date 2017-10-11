function greet () {

var arr = ["hei", "hallo", "halla"];

var randomGreeting = arr[Math.floor(Math.random() * 3)]

return randomGreeting;

}
console.log(greet());