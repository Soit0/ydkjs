function makeAdder(x) {
    function add(y) {
        return y + x
    }
    return add;
}
var plusOne = makeAdder(1)
var plusTen = makeAdder(10)

console.log(plusOne(3)) // makes 4
//  ... and I don't understand why ! (yet : 13/07/2021)