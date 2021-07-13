try {
    function foo() {
        a = 1;
    }
    foo()
    let a
    console.log(a)
} catch (err) {
    console.log('Can\'t hoist variable with let !')
}

function bar() {
    b = 1
}
bar()
var b
console.log(b, 'is working with var because of auto top-level global scope variable');