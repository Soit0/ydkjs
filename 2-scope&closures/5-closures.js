var fn

function foo() {
    var a = 2
    function bar() {
        console.log(a)
    }
    fn = bar // assigning bar to a global variable
}

function baz() {
    fn()
}

foo()
baz() // The lexical scope of baz would not normally have to var a but the closure allows it (fn(), thus baz(), have closure over it)