function process(obj) {
    console.log(obj.a + obj.b)
}

{
    let obj = { a: 1, b: 3 }
    process(obj)
}

try {
    console.log(obj)
} catch (err) {
    console.error("can't log obj because it has already been collected by the garbage collector")
}
// Block scoping can address memory allocation issues. Here the object is collected immediatly after by the garbage collector.


