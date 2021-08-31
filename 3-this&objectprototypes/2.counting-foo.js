function foo(num) {
    foo.count++
}
// is equal to :
function thisFoo(num) {
    this.count++
}

foo.count = 0

var i

for (let i = 0; i < 10; i++) {
   if(i > 5) {
       
       thisFoo.call(foo, i)
   } 
}

console.log(foo.count)
console.log(thisFoo.count)