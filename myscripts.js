var first = document.getElementById("num1").value;
var second = document.getElementById("num2").value;
var done = first * second;

var el = document.getElementById("output");
el.textContent = done;
console.log(done);