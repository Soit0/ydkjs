var a = true

if (a) {
    b = " var allows hoisting"
    console.log(b)
    var b
}

try {
    if (a) {
        b = true
        console.log(b)
        let b
    }
} catch (e) { console.log("let does not allow hoisting") }