var foo = {
    a: 42
}

var bar = Object.create(foo)

bar.b = "hello"

console.log(bar.a); // 42 : property inherited from prototype foo
console.log(bar.b); // "hello" : normal property