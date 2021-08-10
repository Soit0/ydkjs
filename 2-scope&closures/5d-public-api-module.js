var foo = (function ApiModule(id) {
    var publicAPI = {
        change: change,
        identify: identify1
    }

    function change() {
        publicAPI.identify = identify2
    }

    function identify1() {
        console.log(id)
    }

    function identify2() {
        console.log(id.toUpperCase())
    }

    return publicAPI
})("api module")
foo.identify() // "api module"
foo.change()
foo.identify() // "API module"