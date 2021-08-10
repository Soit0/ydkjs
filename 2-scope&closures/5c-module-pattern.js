function coolModule() {
    var something = "cool"
    var another = [1, 2, 3]

    function doSomething() {
        console.log(something)
    }

    function doAnother() {
        console.log(another.join(" ! "))
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother
    }
} 

var foo = coolModule()
foo.doSomething() // "cool"
foo.doAnother() // "1 ! 2 ! 3"

function countModule() {
    var count = 0

    function increment() {
        count ++
    }

    function print() {
        console.log(count);
    }

    return {
        increment: increment,
        print: print
    }
}

var count = countModule()
count.print() // 0
count.increment()
count.print() // 1

var otherCount = countModule()
otherCount.print() // 0